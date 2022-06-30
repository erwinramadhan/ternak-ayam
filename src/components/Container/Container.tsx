import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/elements';
import {IContainer} from '../../constants/types/Container';

const Container = ({
  children,
  containerStyle,
  hideStatusBar,
  barStyle,
  translucent,
  barBackgroundColor,
  backgroundColorContainer,
  scrollView,
}: IContainer) => {
  const headerHeight = useHeaderHeight();
  const styles = Style(backgroundColorContainer);
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <>
          <StatusBar
            hidden={hideStatusBar}
            barStyle={barStyle}
            translucent={translucent}
            backgroundColor={barBackgroundColor}
          />
          <View style={{height: (insets?.top || 0) - headerHeight}} />
          {scrollView ? (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <View
                style={StyleSheet.flatten([containerStyle, styles.container])}>
                {children}
              </View>
            </ScrollView>
          ) : (
            <View
              style={StyleSheet.flatten([containerStyle, styles.container])}>
              {children}
            </View>
          )}
        </>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Container;

const Style = (backgroundColor: IContainer['backgroundColorContainer']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
    },
  });

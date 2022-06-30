import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from '../../constants/types/store';
import type {RootState} from '../store';

const initialState: IUserState = {
  name: '',
  gender: '',
  detailTask: {
    category: '',
    tasks: [],
    timeEnd: '',
    timeStart: '',
  },
  taskList: [
    {
      date: '2022-06-30',
      itemsAfternoon: {
        category: 'afternoon',
        timeEnd: '17:30',
        timeStart: '16:00',
        tasks: [
          {
            name: 'Memberi Makan Ayam',
            items: [
              {
                name: 'Mengambil pakan ayam sebanyak 8 gelas takar',
                isDone: false,
              },
              {
                name: 'Meletakkan pakan ayam pada tempatnya',
                isDone: false,
              },
            ],
          },
          {
            name: 'Memberi Minum Ayam',
            items: [
              {
                name: 'Membersihkan tempat minum ayam',
                isDone: false,
              },
              {
                name: 'Mengambil air untuk minum ayam',
                isDone: false,
              },
              {
                name: 'Meletakkan air untuk minum ayam di tempat yang sudah disediakan',
                isDone: false,
              },
            ],
          },
          {
            name: 'Mengambil Telur',
            items: [
              {
                name: 'Mengambil telur dari kandang',
                isDone: false,
              },
              {
                name: 'Memberikan tanda untuk ayam yang sudah bertelur',
                isDone: false,
              },
              {
                name: 'Membersihkan telur yang kotor',
                isDone: false,
              },
              {
                name: 'Menghitung telur yang didapatkan hari ini',
                isDone: false,
              },
              {
                name: 'Mencatat jumlah telur yang didapat hari ini',
                isDone: false,
              },
            ],
          },
        ],
      },
      itemsMorning: {
        category: 'morning',
        timeEnd: '07:00',
        timeStart: '05:30',
        tasks: [
          {
            name: 'Memberi Makan Ayam',
            items: [
              {
                name: 'Mengambil pakan ayam sebanyak 8 gelas takar',
                isDone: false,
              },
              {
                name: 'Meletakkan pakan ayam pada tempatnya',
                isDone: false,
              },
            ],
          },
          {
            name: 'Memberi Minum Ayam',
            items: [
              {
                name: 'Membersihkan tempat minum ayam',
                isDone: false,
              },
              {
                name: 'Mengambil air untuk minum ayam',
                isDone: false,
              },
              {
                name: 'Meletakkan air untuk minum ayam di tempat yang sudah disediakan',
                isDone: false,
              },
            ],
          },
          {
            name: 'Mengambil Telur',
            items: [
              {
                name: 'Mengambil telur dari kandang',
                isDone: false,
              },
              {
                name: 'Memberikan tanda untuk ayam yang sudah bertelur',
                isDone: false,
              },
              {
                name: 'Membersihkan telur yang kotor',
                isDone: false,
              },
              {
                name: 'Menghitung telur yang didapatkan hari ini',
                isDone: false,
              },
              {
                name: 'Mencatat jumlah telur yang didapat hari ini',
                isDone: false,
              },
            ],
          },
        ],
      },
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{name: string; gender: string}>) => {
      state.name = action.payload.name;
      state.gender = action.payload.gender;
    },
    setDeailTask: (state, action: PayloadAction<any>) => {
      state.detailTask = action.payload;
    },
    updateTaskList: (state, action) => {
      let {date, category, parentName, childName} = action.payload;
      let keyItems: 'itemsMorning' | 'itemsAfternoon' = 'itemsMorning';
      switch (category) {
        case 'morning':
          keyItems = 'itemsMorning';
          break;
        case 'afternoon':
          keyItems = 'itemsAfternoon';
          break;
        default:
          keyItems = 'itemsMorning';
          break;
      }

      let updatedTask = state.taskList.find(el => el.date === date);
      let notUpdatedTask = state.taskList.filter(el => el.date !== date);

      if (updatedTask) {
        let updatedCategoryItem = updatedTask[keyItems].tasks.find(
          el => el.name === parentName,
        );

        let contructedUpdatedCategoryItem = {
          name: updatedCategoryItem?.name,
          items: updatedCategoryItem?.items.map(el => {
            if (el.name === childName) {
              return {
                name: el.name,
                isDone: !el.isDone,
              };
            } else {
              return el;
            }
          }),
        };

        let shuffleDetail = [
          ...updatedTask[keyItems].tasks.filter(el => el.name !== parentName),
          contructedUpdatedCategoryItem,
        ];

        let makan = shuffleDetail.find(el => el.name === 'Memberi Makan Ayam');
        let minum = shuffleDetail.find(el => el.name === 'Memberi Minum Ayam');
        let telur = shuffleDetail.find(el => el.name === 'Mengambil Telur');

        let unShuffleDetail = [makan, minum, telur];

        updatedTask = {
          ...updatedTask,
          [keyItems]: {
            ...updatedTask[keyItems],
            tasks: unShuffleDetail,
          },
        };

        state.taskList = [...notUpdatedTask, updatedTask];
        state.detailTask.tasks = unShuffleDetail;
      } else {
        state.taskList = state.taskList;
      }
    },
  },
});

export const {setUser, setDeailTask, updateTaskList} = userSlice.actions;

export const selectUser = (state: RootState) => state;

export default userSlice.reducer;

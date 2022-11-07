import moment from "moment";

// export class ClubSevenDaysAvgShots {
//   addDataset(data, myId) {
//     const datasets = [];
//     data.map((data) => {
//       let DateAndValues = {};
//       let date = (data) => {
//         for (var item in data) {
//           DateAndValues[moment(item).format("dddd").slice(0, 3)] = data[item];
//         }
//       };
//       date(data.data);
//       datasets.push({
//         label: data.user.surname,
//         data: DateAndValues,
//         borderColor:
//           myId === data.user.id
//             ? ["rgba(0,255,255)"]
//             : ["rgba(124,252,0, 0.6)"],
//         //backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//         backgroundColor:
//           myId === data.user.id
//             ? ["rgba(0,255,255)"]
//             : ["rgba(124,252,0, 0.6)"],
//         borderWidth: 3,
//       });

//       // other - "rgba(124,252,0)" "rgba(144,238,144)" "rgba(50,205,50)"
//       // me - "rgba(0,255,255)"
//     });

//     return datasets;
//   }

//   addLabel = (data) => {
//     let labels = [];
//     for (const [key] of Object.entries(data[0].data)) {
//       labels.push(moment(key).format("dddd").slice(0, 3));
//     }
//     return labels;
//   };

//   newChart(data, labelTitle, myUserId) {
//     let datasets = this.addDataset(data, myUserId);
//     let labels = this.addLabel(data);
//     let chart = {
//       labels: labels,
//       datasets: datasets,
//     };
//     return chart;
//   }
// }

export const ClubSevenDaysAvgShots = (data, labelTitle, myUserId) => {
  const datasets = [];
  data.map((values) => {
    let DateAndValues = {};
    let date = (values) => {
      for (var item in values) {
        DateAndValues[moment(item).format("dddd").slice(0, 3)] = values[item];
      }
    };
    date(values.data);

    datasets.push({
      label: values.user.surname,
      data: DateAndValues,
      borderColor:
        myUserId === values.user.id
          ? ["rgba(0,255,255)"]
          : ["rgba(124,252,0, 0.6)"],
      //backgroundColor: ["rgba(75, 192, 192, 0.6)"],
      backgroundColor:
        myUserId === values.user.id
          ? ["rgba(0,255,255)"]
          : ["rgba(124,252,0, 0.6)"],
      borderWidth: 3,
    });

    // other - "rgba(124,252,0)" "rgba(144,238,144)" "rgba(50,205,50)"
    // me - "rgba(0,255,255)"
  });

  let labels = [];
  for (const [key] of Object.entries(data[0].data)) {
    labels.push(moment(key).format("dddd").slice(0, 3));
  }

  // let datasets = this.addDataset(data, myUserId);
  // let labels = this.addLabel(data);
  let chart = {
    labels: labels,
    datasets: datasets,
  };
  return chart;
};

// export const PersonalSevenDaysAvgShots = () => {
// let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 0];

export const PersonalSevenDaysAvgShots = (data) => {
  // console.log(moment("2022-12").format("MMM"));

  let labels = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    //   datasets: [
    //     {
    //       label: "Средняя статистика",
    //       data: data,
    //       backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    //       borderWidth: 3,
    //     },
    //   ],

    datasets = [];
  // data.map((data) => {
  // let DateAndValues = {};
  // let date = (data) => {
  //   for (var item in data) {
  //     DateAndValues[moment(item).format("dddd").slice(0, 3)] = data[item];
  //   }
  // };
  // date(data);
  console.log(data);
  datasets.push({
    label: "Средняя статистика",
    data: data,
    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    borderWidth: 3,
  });

  // other - "rgba(124,252,0)" "rgba(144,238,144)" "rgba(50,205,50)"
  // me - "rgba(0,255,255)"
  // });

  // let labels = [];
  // for (const [key] of Object.entries(data[0].data)) {
  //   labels.push(moment(key).format("dddd").slice(0, 3));
  // }

  let chart = {
    labels: labels,
    datasets: datasets,
  };
  return chart;
};

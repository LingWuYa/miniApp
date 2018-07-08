const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDoubanMovieData = data => {
  const obj = {};
  obj.name = data.aka[0];
  obj.id = data.id;
  obj.imgurl = data.images.small;
  obj.score = data.rating.average;
  obj.stars = data.rating.stars;
  obj.ison = data.has_video;

  return obj;
}

const convertToStarsArray = stars => {
  var num1 = stars.toString().substring(0, 1);
  var num2 = stars.toString().substring(1, 2);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num1) {
      array.push(1);
    }
    else {
      array.push(0);
    }
  }
  if(num2==5){
    array[num1]=2;
  }
  return array;
}

const http = (url,dataName,callback) => {
  wx.request({
    url: url,
    data: '',
    header: { 'content-type': 'json' },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data, dataName);
      }
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}

function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}

module.exports = {
  formatTime: formatTime,
  formatTvs: formatDoubanMovieData,
  formatStars: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
};
const quotes = [
    {
      quote: "사람들이 꿈을 이루지 못하는 한 가지 이유는 그들이 생각을 바꾸지 않고 결과를 바꾸고 싶어하기 때문이다."
    },
    {
      quote: "우리가 생각을 제대로 변화시킬 때만 다른 것들이 제대로 나타나기 시작한다."
    },
    {
      quote:
        "목표를 설정하는 것에서 너무 감동받지 마라. 목표를 실현하는 것에서 감동을 받아라."
    },
    {
      quote: "좋은 충고를 받아들이는 것은 자신의 능력을 키우는 것이다."
    },
    {
      quote: "인생은 우리가 하루종일 생각하는 것으로 이루어져 있다."
    },
    {
      quote: "작은 생각만큼 성취를 제한하는 것도 없다. 자유로운 생각만큼 가능성을 확장하는 것도 없다."
    },
    {
      quote: "우리는 누군가의 생각을 막을 수는 없지만 시작하게는 할 수 있다."
    },
    {
      quote: "사람들은 스스로 상상하지 못하는 일은 결코 이루지 못할 것이다."
    },
    {
      quote: "긍정적이고 감사하는 사람이 되자."
    },
    {
      quote: "항상 갈구하라. 바보짓을 두려워하지 마라."
    },
];

const youTubeList = [
  {
    youtube: "JX4saGj5XAw"
  },
  {
    youtube: "sMivc3RIrFs"
  },
  {
    youtube: "G_TJZ4KPqpA"
  }
];


const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
const todaysYouTube = youTubeList[Math.floor(Math.random() * youTubeList.length)];
quote.innerText = todaysQuote.quote;


// let player = document.getElementById("player");  //지정한 id명
// function showVideo(){
//   player = new YT.Player('player', {
//     height:'300',
//     width:'50%',
//     videoId : todaysYouTube,
//     playerVars:{
//       'autoplay' : 1,
//       'controls' : 1,
//       'loop' : 1,
//     },
//     events: {
//       'onReady' : load,
//     }
//   })
// }
// function load(e){
//   e.target.playVideo();
// }

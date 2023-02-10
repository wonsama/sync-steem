const {
  getContent,
  getDynamicGlobalProperties,
  getAccountHistory,
} = require("./util/steem");

// console.log(`app : ${process.env.WOW}`);

async function init() {
  let author = "wonsama";
  let permlink = "6euqbe";

  let res = await getAccountHistory("wonsama", -1, 10);
  //   let res = await getDynamicGlobalProperties();
  //   let res = await getContent(author, permlink);
  console.log(res);
}
init();

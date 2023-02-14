const {
  getContent,
  getDynamicGlobalProperties,
  getAccountHistory,
  getBlock,
} = require("./util/steem");

// console.log(`app : ${process.env.WOW}`);

async function init() {
  let author = "wonsama";
  let permlink = "6euqbe";

  // let res = await getAccountHistory("wonsama", -1, 10);
  // let res = await getDynamicGlobalProperties();
  //   let res = await getContent(author, permlink);
  let res = await getBlock(72024645);
  console.log(res);
}
init();

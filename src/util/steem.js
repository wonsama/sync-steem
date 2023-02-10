const { post } = require("./rpc");

/**
 * 전역설정 정보를 반환한다
 * @returns 설정정보
 */
function getDynamicGlobalProperties() {
  let method = "condenser_api.get_dynamic_global_properties";
  let params = [];

  return post(method, params);
}

/**
 * 컨텐츠 정보를 반환한다
 * @param {string} author 계정명 (@제외)
 * @param {string} permlink 계정 기준 고유 링크
 * @returns
 */
function getContent(author, permlink) {
  let method = "condenser_api.get_content";
  let params = [author, permlink];

  return post(method, params);
}

/**
 * 계정 기준 최신 정보를 가져온다
 * @param {string} author 계정명
 * @param {number} start -1 : 최근 정보
 * @param {number} limit 최대 10000개 로딩 가능, 한번에 많이 가져오는 경우 1000개 추천
 * @returns
 */
function getAccountHistory(author, start = -1, limit = 10) {
  let method = "condenser_api.get_account_history";
  let params = [author, start, limit];

  return post(method, params);
}

module.exports = {
  getDynamicGlobalProperties,
  getAccountHistory,
  getContent,
};

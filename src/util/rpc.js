const axios = require("axios").default;

const STEEM_API_URL = process.env.STEEM_API_URL || "https://api.steemit.com";
const MAX_RETRY = parseInt(process.env.MAX_RETRY || "3");

/**
 *RPC 2.0 통신 모델 생성
 * @param {string} method 호출 메소드
 * @param {any} params 전송 파라미터
 * @param {number} id 아이디 (수신 시 동일 id 값을 리턴해준다)  default : 0
 * @returns rpc20 개체
 */
function rpc20(method, params, id = 0) {
  let json = {};
  json.jsonrpc = "2.0";
  json.method = method;
  if (params) {
    json.params = params;
  }
  json.id = id;

  return json;
}
/**
 * steem 데이터를 받아오기 위한 post 통신
 * @param {string} method 커맨드
 * @param {any} params 파라미터
 * @param {number} retry 재 시도 시작 횟수 default : 0
 * @returns 호출 결과
 */
async function post(method, params, retry = 0) {
  try {
    let res = await axios.post(STEEM_API_URL, rpc20(method, params));
    return res.data.result;
  } catch (err) {
    console.error(err.toString());
    retry++;
    if (retry > MAX_RETRY) {
      // 오류 처리
      console.error(
        `post max retry ${MAX_RETRY} is over : input [ method : ${method}, params : ${params}]`
      );
      process.exit(-1);
    } else {
      // 재기동
      return post(method, params, retry);
    }
  }
}

module.exports = {
  post,
};

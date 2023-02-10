# sync-steem

스팀 데이터를 동기화 하도록 함

설정에 따라 특정 컨텐츠만 받고 저장하도록 구성

```txt
comments
L content
L replay
...
transfer
```

## 설치 및 실행

### 실행

dev : `pm2 start`
prod : `pm2 start --dev prod`

prod 의 경우 `ecosystem.config.js` 파일 내 `env_prod` 의 값을 참조하게 된다

## 의존성

- axios
- pm2
- moment

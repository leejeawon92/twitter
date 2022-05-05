# 프로젝트 샘플
### Backend코드없이 ReactJS와 firebase를 통해 트위터를 구현하였습니다.
![twitter_sample](https://user-images.githubusercontent.com/73148498/166888281-11cc6eb4-a664-4044-9b0c-d4dff1bcf704.gif)


# 주요기능
* 수정 및 추가를 할 수 있는 트윗을 작성할 수 있습니다.또한 서로다른 계정이 트윗을 작성해도 실시간으로 트윗을 볼 수 있습니다
  * cloud Firestore를 사용하여 데이터베이스를 구축하였고, 해당 DB에서 트윗을 불러오고 수정및 추가를 하였습니다.
  

* 구글, 깃헙, 이메일, 비밀번호 인증기능을 사용하였습니다.
  * 이메일/비밀번호 인증시에는 createUserWithEamilAndPassword / signInWithEamilAndPassword 를 사용하였습니다.
  * 구글/깃헙 인증시에는 SignInWithPopup 를 사용하였습니다.
  
* 트윗을 작성 할때 사진파일도 같이 업로드 할 수 있습니다.
  * butket을 이용하여 사진파일들을 저장하였습니다.
  
* 로그인 한 유저는 프로필을 수정 할 수 있습니다.

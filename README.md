
# 🧘 YogA!
![image](https://user-images.githubusercontent.com/96659041/205017829-1cf921ba-89be-4a3f-88c1-d02e85722086.png)


'YogA!' 팀은 인공지능 모델이 탑재된 웹 서비스를 개발하기 위해 모인 팀으로<br>
팀 명은 'Yoga' 와 'Ai' 가 합쳐진 합성어 입니다.<br>


##  ⏯ 프로젝트 실행
- 

## Contributors
![image](https://user-images.githubusercontent.com/96659041/205021051-ca7acd82-5f16-48ef-b8af-2cc40488812a.png)

## PipeLine
![image](https://user-images.githubusercontent.com/96659041/205020312-5abd2135-e86f-4650-aad6-b8d407e0f2bf.png)

## 기획 의도
아래 자료는 지금은 조금 완화되었지만,<br> 
코로나 19 의 영향으로 인한 사람들의 관심사에 대해 시장조사한 내용입니다.<br>
![image](https://user-images.githubusercontent.com/96659041/205029013-8fe2b07c-0a91-4153-a3f2-bda5e30ef3d5.png)

시각화된 그래프를 보시면 알 수 있듯,<br> 
상위 쪽 랭크에 분포된 관심사들이 건강쪽의 분야임을 확인할 수 있습니다. <br>
이를 참고하여,<br>
건강을 주제로 운동에 대한 서비스를 개발하는것을 필두로 하여 주제 선정을 하였습니다.<br>
![image](https://user-images.githubusercontent.com/96659041/205029200-f5b17f29-e69e-4f3f-80c2-e351bbf3b13e.png)

<br>
상위 키워드인 요가복, 홈짐, 매트을 정리해보면,<br>
집에서 요가복을 입고 매트위에서 할 수 있는 운동 이라고 추측할 수 있었습니다.<br>

![image](https://user-images.githubusercontent.com/96659041/205115596-0a2f25d5-1457-4a72-a8a8-0eacf561563e.png)
<br>

## WireFrame 🖥️
서비스를 구현하기 전 초기 디자인으로 구현한 와이어프레임입니다.<br>
https://app.tryeraser.com/workspace/wC3ZK7d1WNp2dEnwM3S9
![image](https://user-images.githubusercontent.com/96659041/205113831-a2336700-314e-45ef-9f82-879071b362f8.png)


## ERD
각각의 기능은 3개의 테이블로 구성되어 있으며,<br>
멤버 테이블에서 short Id 를 post 테이블에서 참조하여 사용하고 있습니다.
![image](https://user-images.githubusercontent.com/96659041/205116232-3a37df66-41e6-43b0-906f-7cebe2642f62.png)


## 서비스 소개
저희가 개발한 서비스는,<br>
AI 모델을 기반으로 사용자가 취하는 자세가 올바른지 판별해주는 기능을 담고있는 서비스 입니다.<br>
더불어 여러 자세에 대한 정보와<br>
사용자간의 커뮤니티를 위한 게시판 기능을 추가하여 개발하였습니다.<br>
![image](https://user-images.githubusercontent.com/96659041/205118367-cdaf409b-2391-4a9d-a130-09cea5e54c7e.png)


## 사용된 AI 모델
텐서플로우의 MoveNet 모델을 활용하였고,<br>
무브넷 모델은 텐서플로우의 경량화된 모델로 운동, 춤 등의 데이터셋을 기반으로 학습된 모델입니다.<br>
17개의 keypoint 를 기반으로 초당 30개의 프레임에 대해 이미지를 분석하고.<br>
웹 캠에 비춰지는 사용자의 관절을 스켈레톤 형태로 인식하여<br>
올바른 자세를 하고있는지 판별해주는 기능을 담고있습니다.<br>

<div align='center'>
<image align="left" width="350" height="400" src='https://user-images.githubusercontent.com/96659041/205118931-c6510f75-188a-403a-9907-718473d33b63.png'/>
<image align="right" width="350" height="400" src='https://user-images.githubusercontent.com/96659041/205122655-c3f85443-a876-4fdd-aca1-3a21d2951041.png'/>
</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## 기대효과
이 서비스를 이용함으로써 얻을 수 있는 가장 큰 기대효과로는 경제성 입니다.<br>
접근성이 다소 낮은 요가를 배우기 전 단계로<br>
탑재된 AI 모델을 통해 <br>
무료로 시간과 공간의 제약 없이 집에서 손쉽게 자세를 익힘으로써 <br>
얻을 수 있는 비용 절감의 효과를 강조할 수 있습니다.<br>
![image](https://user-images.githubusercontent.com/96659041/205225351-17a27d5a-4e0c-46c0-a0c5-2fb1116456d8.png)



## 🎥 시연 영상
https://github.com/swon95/YogAI/blob/main/%EC%8B%9C%EC%97%B0%20%EC%98%81%EC%83%81.mp4<br>
(👆 시연 영상 참고 - 다운로드 권장)

<br><br><br>
## 회고
### 개선사항
추가되었으면 하는 기능으로는,<br>
커뮤니티성이 돋보이는 역할을 위한 기능으로<br>
게시물에 댓글을 남길 수 있는 기능과 <br>
사용자간의 교류를 위해 웹 소켓을 활용한 실시간 채팅 기능,<br>
기존 AI 모델에 학습된 자세보다 더 많은 자세를 학습시켜<br>
다양한 자세를 경험할 수 있는 기능을 추가하려했지만,<br>
시간관계상 개발하지 못하였고 추후 개선사항으로 추가 할 계획을 갖고있습니다.<br>
![image](https://user-images.githubusercontent.com/96659041/205225694-ceca4a92-7b26-4e55-ab75-9a89d9e884b0.png)

### 아쉬운점
이번 프로젝트를 진행하며 아쉬운점으로<br>
수업과 병행해 진행하는 프로젝트였기 때문에<br> 
몰입하여 진행하는 기간 이전에는 온라인으로 소통하려 했으나<br>
소통의 부재로 인해 다소 어려움을 느꼇고,<br>
이를 통해 소통 및 협업에 대한 중요성을 다시금 느끼게 되었습니다.<br><br>

또한,<br>
생소한 라이브러리와 협업하기 위해 사용한<br>
깃허브에 대한 사용법이 익숙하지 않아 다소 어려움을 겪었습니다.

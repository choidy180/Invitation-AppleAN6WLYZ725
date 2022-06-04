import type { NextPage } from "next";
import { LogoApple } from "react-ionicons";
import styled from "styled-components";
import { media } from "../styles/theme";
import Iframe from 'react-iframe'

const Home: NextPage = () => {
  return (
    <Continer>
      <LogoApple
        color={'#00000'}
        height="100px"
        width="100px"
        cssClasses={"HeadLogo"}
      />
      <Content>
        <Title>Join us for Apple Internship Training Program</Title>
        <TitleKo>가빈 박, 혜수 손 님안녕하세요.</TitleKo>
        <TitleKo>애플 인턴쉽 프로그램에 지원을 선택해 주셔서 감사합니다. 이 초대장에 있는 중요 정보를 꼭 읽어 주시기 바랍니다.</TitleKo>
        <TitleKo><b>초대장 번호</b> : AN2WKYV949</TitleKo>
        <TitleKo><b>진행 종류</b> : 제품디자인 / Product design</TitleKo>
        <DateText><b>참석 예약</b> : 15-Jun-2022 09:00 AM ~ 12-Jul-2022 16:00 PM KST</DateText>
        <Addressee><b>초대자</b> : Jeongeun Baek</Addressee>
        <Addressee><b>참석자</b> : Gabin Park, Hyesoo Son</Addressee>
        <Addressee><b>참석 장소</b>: CA Cupertino Apple Computer Inc. 1 infinite Loop 95014</Addressee>
        <img 
          src="https://maps.wikimedia.org/img/osm-intl,14,37.335555555556,-122.00916666667,300x200.png?lang=ko&amp;domain=ko.wikipedia.org&amp;title=%EC%95%A0%ED%94%8C+%ED%8C%8C%ED%81%AC&amp;revid=32335207&amp;groups=_d2f6e89e99721a9606d115df13730a947d7d59a4" 
          alt="" 
          width="300" 
          height="200" 
          decoding="async" 
        ></img>
        <Next>다음 절차 안내</Next>
        <NextTitle>프로그램 참석 및 진행</NextTitle>
        <NextContent>프로그램 진행 전에 게스트 스테이지에서 요청하는 지침을 따르시기 바랍니다.</NextContent>
        <NextTitle>장소에 도착</NextTitle>
        <NextContent>위에 안내받은 장소로 예약 시간 15분 이전에 도착해 주시기 바랍니다.</NextContent>
        <NextTitle>Company Housing 숙박 신청</NextTitle>
        <NextContent>해당 프로그램 합격자는 애플의 Company Housing을 이용할 수 있습니다. 이용을 원하시는 경우 담당자에게 프로그램 진행 전에 미리 요청하시기 바랍니다.</NextContent>
        <NextTitle>일정 변경</NextTitle>
        <NextContent>프로그램 진행 전 방역을 포함한 귀사의 문제로 인하여 일정이 시작전 또는 진행 중, 변경 또는 취소 될 수 있습니다. 일정변동 시 귀사는 최대한 빠르게 설명하고 안내하겠습니다. 또한 참여 게스트는 예약하신 날짜 및 시간에 방문이 어려우신 경우 예약을 변경해 주시기 바랍니다. 예약 희망시 초대자에게 예약 변경을 요청하시기 바랍니다. 다른 항목이 포함되지 않는 경우 해당 항목은 고객님께 반납되지 않습니다.</NextContent>
      </Content>
    </Continer>
  )
}

const Continer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${media.tablet}{
    width: 100%;
    height: auto;
  }
`
const Title = styled.p`
  font-size: 1.4rem;
  margin-top: 150px;
`
const TitleKo = styled.p`
  font-size: 1.4rem;
  margin-top: 16px;
  b{
    font-family: 'Tium';
  }
`
const Content = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  img{
    margin-top: 20px;
  }
`
const DateText = styled.p`
  font-size: 1.4rem;
  margin-top: 24px;
  b{
    font-family: 'Tium';
  }
`
const Addressee = styled.p`
  font-size: 1.4rem;
  margin-top: 12px;
  b{
    font-family: 'Tium';
  }
`
const Next = styled.p`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  margin-top: 80px;
`
const NextTitle = styled.p`
  font-size: 2.1rem;
  margin-top: 50px;
  font-weight: 300;
`
const NextContent = styled.p`
  font-size: 1.6rem;
  margin-top: 12px;
  font-weight: 300;
  line-height: 1.85rem;
`

export default Home;

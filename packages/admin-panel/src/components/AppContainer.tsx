import * as React from 'react';
import styled from 'styled-components';

const BESTVIEWED_BANNER_URL = 'https://web.archive.org/web/20090724131902im_/http://www.geocities.com/savagescorpio/music/BESTVIEWED.gif';

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c0c0c0;
  padding: 8px;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 16px 8px;
  margin-bottom: 32px;
`;

const Banner = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

interface AppContainerProps {}
const AppContainer: React.FunctionComponent<AppContainerProps> = ({ children }) => (
  <Conatiner>
    <Heading>LebkuchenFM admin panel</Heading>
    <Banner src={BESTVIEWED_BANNER_URL} alt="This page is best viewed with Internet Explorer" />
    <MainContainer>
      {children}
    </MainContainer>
  </Conatiner>
);

export default AppContainer;
export { AppContainerProps };

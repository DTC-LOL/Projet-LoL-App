import React from "react";
import styled from "styled-components";

interface IProps {
  tabs: { title: string; render: any }[]
}

interface IActive {
  active: boolean
}

const Tabs: React.FC<IProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = React.useState(0);

	return (
		<>
			<TabContainer>
				{tabs.map((tab, index) => (
					<TabButton
						key={"Tab_"+index}
						onClick={() => setActiveTab(index)}
					>
						<Title>{tab.title}</Title>
						<Indicator active={activeTab === index} />
					</TabButton>
				))}
			</TabContainer>
			{tabs[activeTab].render()}
		</>
	);
};

const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;

const TabButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 2px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background-color: rgb(40 40 40 / .9) !important;
  &:focus {
    outline: none;
  }
`;

const Title = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  transition: 0.6s;
`;

const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${(props: IActive) =>
	props.active ? "#dd0054" : "#1d1d1d"};
  transition: 0.6s;
`;

export default Tabs;

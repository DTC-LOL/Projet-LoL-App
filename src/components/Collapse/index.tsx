import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  card?: boolean;
  size?: "normal" | "small" | "medium";
}

const Collapse: React.FC<IProps> = ({
  title,
  subtitle,
  children,
  defaultExpanded = false,
  size = "medium",
  ...props
}: IProps) => {
  const contentContainerRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState<boolean>(defaultExpanded);
  const [height, setHeight] = React.useState<number | undefined>(
    defaultExpanded ? undefined : 0
  );

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (!height || !isOpen || !contentContainerRef.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(contentContainerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  React.useEffect(() => {
    if (isOpen && contentContainerRef.current)
      setHeight(contentContainerRef.current.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <Container {...props}>
      <Header onClick={handleClick} isOpen={isOpen}>
        <HeaderContent>
          <Title size={size}>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </HeaderContent>
  
      </Header>
      <Content height={height}>
        <ContentContainer ref={contentContainerRef}>
          {children}
        </ContentContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ card?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.dark};

  :first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  }

  ${({ card, theme }) =>
    card &&
    `
    border: 1px solid ${theme.colors.layout.dark};
    border-radius: 5px;
    background: ${theme.colors.layout.darker};
    margin-bottom: 10px;
    width: calc(100% - 1px * 2);

    :first-child {
      margin-top: 0;
    }
  `}
`;

const Header = styled.button<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3<{ size?: "normal" | "small" | "medium" }>`
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.size.small;
      case "medium":
        return theme.size.medium;
      default:
        return theme.size.normal;
    }
  }};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const Subtitle = styled.span`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text.light};
`;

const Content = styled.div<{ height?: number }>`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  height: ${({ height }) => (height ? `calc(${height}px + 10px * 2)` : "0px")};
`;

const ContentContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export default Collapse;

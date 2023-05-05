import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;

  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  font-weight: bold;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme["green-500"]};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`;

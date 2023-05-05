import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme["gray-300"]};
    background: ${({ theme }) => theme["gray-900"]};

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme["green-300"]};
    border: 1px solid ${({ theme }) => theme["green-300"]};
    padding: 1rem;
    background: transparent;

    cursor: pointer;
		
    &:disabled {
			opacity: 0.7;
			cursor: not-allowedß;
    }

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme["green-500"]};
      border-color: ${({ theme }) => theme["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;

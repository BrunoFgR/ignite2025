import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 4px;
    border: 0;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition:
      border-color 0.2s,
      background-color 0.2s,
      color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover {
      background-color: ${({ theme }) => theme["green-500"]};
      border-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
    }
  }
`;

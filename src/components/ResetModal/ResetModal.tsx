import { FC } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalButtons,
  TextContainer,
} from './ResetModal.styled'

interface ResetModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export const ResetModal: FC<ResetModalProps> = ({
  open,
  onClose,
  onConfirm
}) => {
  if (!open) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <TextContainer>
            <h3>Reset Counter?</h3>
            <p>Are you sure you want to delete all values?</p>
            <p>This action cannot be undone.</p>
        </TextContainer>
        <ModalButtons>
            <button onClick={onClose}>Cancel</button>
            <button onClick={onConfirm}>Reset</button>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  )
}
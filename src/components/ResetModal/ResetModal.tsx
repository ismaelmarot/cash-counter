import { FC } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalButtons,
  TextContainer,
  AlertIcon,
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
            <AlertIcon />
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
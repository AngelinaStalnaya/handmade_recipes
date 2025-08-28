import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

type ModalCompProps = {
    modalBtnText: string,
    modalHeader: string,
    children: React.ReactNode,
    btnVariant?: "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | "ghost" | undefined,
}

export default function ModalComp({ modalBtnText, modalHeader, children, btnVariant }: ModalCompProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                color="secondary"
                radius="full"
                variant={btnVariant ? btnVariant : 'solid'}
                onPress={onOpen}>
                {modalBtnText}
            </Button>
            <Modal
                isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
                backdrop="opaque"
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                size='sm'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                className="flex flex-col gap-1">
                                {modalHeader}
                            </ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    radius='full'
                                    variant="light"
                                    onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

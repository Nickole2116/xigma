import { useEffect, useState } from 'react';
import { AuthButton, CancelButton, DownloadButton, ModalButton, MoreButton, PrimaryButton, SecondaryButton, ThirdButton, SubmitButton } from '@/pages/Shared';
import { BarChart, LineChart, ProgressBar } from '@/pages/Shared';
import { AuthInput, CommentInput, ModalInput, PrimaryInput, SecondaryInput } from '@/pages/Shared';
import { SkeletonLoader } from '@/pages/Shared';
import { PrimaryPopover } from '@/pages/Shared';
import { AuthPopup, PrimaryPopup, SecondaryPopup } from '@/pages/Shared';
import { AuthSelect, ModalSelect, PrimarySelect, SecondarySelect } from '@/pages/Shared';
import { AuthTextField, ModalTextField, PrimaryTextField, SecondaryTextField } from '@/pages/Shared';

const Theme = () => {

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {


    }, [])


    return <>
        <section className={'outlet admin-theme'}>
            {/** Buttons */}
            <div className="comp">
                <div className="main-title">Buttons</div>
                <div className="comp-content">
                    <AuthButton tooltip="auth button tooltip">
                        <span>Auth</span>
                    </AuthButton>
                    <CancelButton>
                        <span>Cancel</span>
                    </CancelButton>
                    <DownloadButton>
                        <span>Download</span>
                    </DownloadButton>
                    <ModalButton>
                        <span>Modal</span>
                    </ModalButton>
                    <MoreButton>
                        <span>More</span>
                    </MoreButton>
                    <PrimaryButton>
                        <span>Primary</span>
                    </PrimaryButton>
                    <SecondaryButton>
                        <span>Secondary</span>
                    </SecondaryButton>
                    <SubmitButton>
                        <span>Submit</span>
                    </SubmitButton>
                    <ThirdButton>
                        <span>Third Button</span>
                    </ThirdButton>
                </div>
            </div>

            {/** Graphs */}
            <div className="comp">
                <div className="main-title">Graphs</div>
                <div className="comp-content">
                    <AuthButton>
                        <span>Auth</span>
                    </AuthButton>
                    <CancelButton>
                        <span>Cancel</span>
                    </CancelButton>
                    <DownloadButton>
                        <span>Download</span>
                    </DownloadButton>
                    <ModalButton>
                        <span>Modal</span>
                    </ModalButton>
                    <MoreButton>
                        <span>More</span>
                    </MoreButton>
                    <PrimaryButton>
                        <span>Primary</span>
                    </PrimaryButton>
                    <SecondaryButton>
                        <span>Secondary</span>
                    </SecondaryButton>
                    <SubmitButton>
                        <span>Submit</span>
                    </SubmitButton>
                    <ThirdButton>
                        <span>Third Button</span>
                    </ThirdButton>
                </div>
            </div>

            {/** Inputs */}
            <div className="comp">
                <div className="main-title">Inputs</div>
                <div className="comp-content">
                    <AuthButton>
                        <span>Auth</span>
                    </AuthButton>
                    <CancelButton>
                        <span>Cancel</span>
                    </CancelButton>
                    <DownloadButton>
                        <span>Download</span>
                    </DownloadButton>
                    <ModalButton>
                        <span>Modal</span>
                    </ModalButton>
                    <MoreButton>
                        <span>More</span>
                    </MoreButton>
                    <PrimaryButton>
                        <span>Primary</span>
                    </PrimaryButton>
                    <SecondaryButton>
                        <span>Secondary</span>
                    </SecondaryButton>
                    <SubmitButton>
                        <span>Submit</span>
                    </SubmitButton>
                    <ThirdButton>
                        <span>Third Button</span>
                    </ThirdButton>
                </div>
            </div>

            {/** Loader */}
            <div className="comp">
                <div className="main-title">Loader</div>
                <div className="comp-content">
                    <AuthButton>
                        <span>Auth</span>
                    </AuthButton>
                    <CancelButton>
                        <span>Cancel</span>
                    </CancelButton>
                    <DownloadButton>
                        <span>Download</span>
                    </DownloadButton>
                    <ModalButton>
                        <span>Modal</span>
                    </ModalButton>
                    <MoreButton>
                        <span>More</span>
                    </MoreButton>
                    <PrimaryButton>
                        <span>Primary</span>
                    </PrimaryButton>
                    <SecondaryButton>
                        <span>Secondary</span>
                    </SecondaryButton>
                    <SubmitButton>
                        <span>Submit</span>
                    </SubmitButton>
                    <ThirdButton>
                        <span>Third Button</span>
                    </ThirdButton>
                </div>
            </div>

            {/** Popover */}
            <div className="comp">
                <div className="main-title">Popover</div>
                <div className="comp-content">
                    <PrimaryPopover
                        content={
                            <div>
                            <b>提示</b>
                            <p>3 秒后自动消失</p>
                            </div>
                        }
                    >
                        <AuthButton>Hover</AuthButton>
                    </PrimaryPopover>

                </div>
            </div>

            {/** Popup */}
            <div className="comp">
                <div className="main-title">Popup</div>
                <div className="comp-content">
                    <AuthButton onClick={() => setOpenModal(true)}>
                        <span>Show Popup</span>
                    </AuthButton>

                    <AuthPopup isOpen={openModal} onClose={() => setOpenModal(false)}>
                        this is popup content
                    </AuthPopup>
                </div>
            </div>

            {/** Select */}
            <div className="comp">
                <div className="main-title">Select</div>
                <div className="comp-content">
                    
                </div>
            </div>

            {/** TextField */}
            <div className="comp">
                <div className="main-title">Text Field</div>
                <div className="comp-content">
                    
                </div>
            </div>
        </section>
    
    </>;
}


export default Theme;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThirdButton, SubmitButton, CancelButton, MoreButton, DownloadButton, ThirdPopup } from '@/pages/Shared';

const PageDisplay = () => {
    const { t } = useTranslation();
    const [cardSetting, setCardSetting] = useState("1");
    const [loading, setLoading] = useState(false);

    const options = ["1", "2", "3", "4"];

    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止默认刷新

        try {
            setLoading(true);

            const payload = {
                card_setting: cardSetting,
            };

            console.log("Submitting:", payload);

            // 👉 如果要打 API
            // await axios.post("/api/settings", payload);

        } catch (error) {
            console.error("Submit failed:", error);
        } finally {
            setLoading(false);
        }
    };



    return <>
        <section className={`page-display`}>
            {/** Icon Settings */}
            <form onSubmit={handleSubmit}>
                <div className="form-row-setting">
                    <div className="lbl">
                        <i className="mdi mdi-album"></i>
                        <span>{t('icon_card_setting')}</span>
                    </div>

                    <div className="option">
                        {/** option card */}
                        <div className={`option_card ${cardSetting == `1` && `bolded`}`} onClick={() => setCardSetting("1")}>
                            <div className="c" style={{ gridTemplateColumns: '40px' }}>
                                <div className="dot"></div>
                            </div>
                        </div>

                        {/** option card */}
                        <div className={`option_card ${cardSetting == `2` && `bolded`}`} onClick={() => setCardSetting("2")}>
                            <div className="c" style={{ gridTemplateColumns: 'calc(50% - .5rem) calc(50% - .5rem)' }}>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>


                        {/** option card */}
                        <div className={`option_card ${cardSetting == `4` && `bolded`}`} onClick={() => setCardSetting("4")}>
                            <div className="c" style={{ gridTemplateColumns: 'calc(50% - .5rem) calc(50% - .5rem)' }}>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <SubmitButton isLoading={loading}>
                    <span>Update</span>
                </SubmitButton>
            </form>
        </section>
    </>;
}

export default PageDisplay;
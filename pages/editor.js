import React from 'react'

import { UIEvent, PhotoEditorSDKUI, ContainedPrimaryButton } from "photoeditorsdk";
import NoSSRWrapper from 'components/NoSSRWrapper';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import pkg from "../package.json";
const HOST = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const ExportButton = styled(ContainedPrimaryButton)`
	background: $themegreen;
	padding: 9px 27px;
	color: #fff;
    border-radius: 4px;
    margin-top: 15px;
    @include transition(.3s);
    & i {
        margin-right: 10px;
    }
}
`

const CloseButton = () => {
    return <div className="header-btn f-right d-none d-md-block pr-20">
        {/*<Link legacyBehavior href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xa41161AF8D4Ee421ba5fED4328F2B12034796A21"><a className="btn"><i className="fal fa-coin"></i>Buy $AFY</a></Link>*/}
        <Link legacyBehavior href="/">
            <a className="btn">Home</a>
        </Link>
    </div>
}



export class PhotoEditorSDK extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenWidth: document.body.clientWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenWidth);
        this.initEditor();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenWidth);
    }

    updateScreenWidth = () => {
        this.setState({
            screenWidth: document.body.clientWidth
        });
    }
    async initEditor() {
        const editor = await PhotoEditorSDKUI.init({
            container: "#editour",
            image: "./example.jpg", // Image url or Image path relative to assets folder
            // Please replace this with your license: https://img.ly/dashboard
            license: '{"api_token":"bzgD_7ZUUOW6ZIMFXdCibw","app_identifiers":["localhost","artifylabs.io"],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":null,"features":["camera","library","export","customassets","whitelabel","adjustment","brush","filter","focus","frame","overlay","sticker","text","textdesign","transform"],"issued_at":1678641257,"minimum_sdk_version":"1.0","owner":"Artify","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"kamNHxAXrRT+kzNEYgdPeoeyajmjQabcXMfD+6iy0lzsCVdC2LmEdIHApGBDXOm9CDzLC1Kfb+1YH3GZZqokE9pULq0PJpBd+m6VZ/Ly8ooWOsOhPbnrO15wtD85K9E9WvfEJgnAhHfqYU1fp2ijvzkXsYDgomtyg0kiE+i3IKDvt60lAB+Pr+FjizuEz6pTTNlFm1VSk7UItnKMOvRhkp1mrC5z9BJGdV90D6dQK26dHHxRG31gZftC+7bGLTx5X62TaKH6CbyEcBjCASQvKYaoFp1PEgFrg10P37shuN5OKImVR8Kna2bRrOumWM2PRJFvXL//GrQHrY3tTvflp7gjQDmQfQp40TYHNm/Oo8qvO1zO7Qkq3mMZmFvhp33q/RDb/Xe9dkJTu9M5vV7P70Yj4Ef8njo84SQL8KvbXMvEnVqTwDYnb7mmIDgK+98zouMtlhyVpuOh589ZdpzbXTITpLHx7chK/kIw5ZLvD04SGXRI2kD54rqjTJJKuWCfMyXAWn3wjW7ArqYmQO4PcEdja9zQhC0T2mt7cuIzP7m2J4IVHqkU0QqREKtKN0/DyrVGSSUbFbBylZBemPsqWuLaoUHpUsti//cUlTGsVsButcNPVpt2AyFRFDkw2iGDQYwotrveCwn8pZVW5nBMUBLX9zUeW0AgsG3oHgzq/3w="}',
            theme: 'light',
            filename: 'artified-art',
            mainCanvasActions: ['export', 'close', 'undo', 'redo'],
            enableZoom: true,
            controls: {

                buttonUpload: 'Upload Sticker',
            },
            scaleImageToFit: true,
            restrictZoomOutToDefault: true,
            displayCloseWarning: true,
            layout: this.state.screenWidth < 720 ? 'basic' : 'advanced',
            library: {
                enableUpload: true
            },
            custom: {

                themes: {
                    light: {

                        toolbar: {
                            foreground: '#e0b555',
                            background: '#fff',
                            activeBackground: 'transparent',
                            activeForeground: '#e0b555',
                        },
                        primary: '#e0b555',
                        mainCanvasActionBar: {
                            background: '#fff',
                        },
                    },
                },
                components: {
                    buttons: {
                        mainCanvasActionClose: CloseButton,
                        mainCanvasActionExport: ExportButton,


                    },
                },
            }, callbacks: {
                onUpload: 'local'
            },
            watermark: {
                watermarkURI: './artify-watermark.png',
                alignment: 'bottom-right',
                inset: 0.02,
                size: 0.2,
            },
            export: {
                fileBasename: 'artified',
                filename: 'artified-art',
                image: {
                    enableDownload: false,
                    fileBasename: 'artified',
                    filename: 'artified-art',
                },
            },

        });
        editor.on('export', () => {
            let format = 'image/jpg';
            let fileBasename = `artified`;
            let filename = 'artified';

            switch (editor.getImageMimeType()) {
                case 'image/png':
                case 'image/svg+xml':
                case 'image/gif':
                case 'image/bmp':
                case 'image/tiff':
                    format = 'image/png';
                    fileBasename = `artified`;
                    filename = 'artified';
                    break;
                default:
                    break;
            }

            editor.export({
                download: true,
                fileBasename: `artify`,
                filename: 'artified',
                image: {
                    fileBasename
                },
                enableDownload: true,
                preventExportEvent: true,
                format,
            }).then((dataURL) => {
                console.log("DATA URL " + dataURL)
            })
        })
        editor.on(UIEvent.EXPORT, (imageSrc) => {
            console.log("Exported ", imageSrc);
        });
    }


    render() {
        return (
            <>
                <Head>
                    <meta name="description" content={pkg.appMetaDescription} />
                    <meta property="og:title" content={pkg.appName} />
                    <meta property="og:description" content={pkg.appMetaDescription} />
                    <meta
                        property="og:image"
                        content={`${HOST}/preview.png`}
                    />
                    <title>{pkg.appName}</title>
                </Head>
                <div
                    id="editor"
                    style={{ width: "100vw", height: "100vh" }}
                />
            </>
        );
    }
}
const Editor = () => {
    return (
        <NoSSRWrapper>
            <div className="pt-20" id="editour">
                <PhotoEditorSDK />
            </div>
        </NoSSRWrapper>
    )
}

export default Editor
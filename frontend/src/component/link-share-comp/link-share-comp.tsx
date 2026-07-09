import { Box, Button, Dialog, Divider, Typography } from '@mui/material';
import styles from './link-share-comp.module.css';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    XShareButton,
    XIcon,
} from 'react-share';
import QRCode from "react-qr-code";
import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

interface Props {
    open: boolean;
    onClose: () => void;
    data: { shareUrl: string, title: string }
}

export default function LinkShareComp({ open, onClose, data }: Props) {
    const shareUrl = data.shareUrl;
    const title = data.title;
    const iconSize = 45;
    const qrRef = useRef<HTMLDivElement>(null);

    const handlePick = () => {
        onClose();
    }

    const downloadQR = useCallback(() => {
        if (qrRef.current === null) return;

        toPng(qrRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'share-link.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err: any) => {
                console.error('Oops, something went wrong!', err);
            });
    }, [qrRef]);

    return (
        <Dialog open={open} onClose={onClose} className={styles.container}>
            <Box className={styles.header}>
                <Typography variant="h4" className={styles.heading}>
                    Share With Friends
                </Typography>

                <Typography className={styles.subHeading}>
                    Social links
                </Typography>
            </Box>

            <Box className={styles.socialWrapper}>
                {/* Facebook */}
                <FacebookShareButton url={shareUrl} onClick={handlePick} className={styles.socialButton}>
                    <FacebookIcon size={iconSize} round={true} />
                </FacebookShareButton>

                {/* X / Twitter */}
                <TwitterShareButton url={shareUrl} title={title} onClick={handlePick} className={styles.socialButton}>
                    <TwitterIcon size={iconSize} round={true} />
                </TwitterShareButton>

                {/* LinkedIn */}
                <LinkedinShareButton url={shareUrl} title={title} onClick={handlePick} className={styles.socialButton}>
                    <LinkedinIcon size={iconSize} round={true} />
                </LinkedinShareButton>

                {/* WhatsApp */}
                <WhatsappShareButton url={shareUrl} title={title} separator=":: " onClick={handlePick} className={styles.socialButton}>
                    <WhatsappIcon size={iconSize} round={true} />
                </WhatsappShareButton>

                {/* X */}
                <XShareButton url={shareUrl} title={title} onClick={handlePick} className={styles.socialButton}>
                    <XIcon size={iconSize} round />
                </XShareButton>
            </Box>

            <Divider className={styles.divider}> OR </Divider>

            <Box className={styles.QrCodeWrapper}>
                <Box className={styles.QrCodeBox} ref={qrRef}>
                    <QRCode
                        size={200}
                        value={shareUrl}
                        viewBox={`0 0 256 256`}
                        className={styles.QrCode}
                    />
                </Box>

                <Button onClick={downloadQR} style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Download PNG
                </Button>
            </Box>
        </Dialog>
    );
};

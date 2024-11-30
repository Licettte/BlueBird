import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export const Main = () => {
    return (
        <div>
            {isBrowser? '111111': '2'}
            <BrowserView>
                <h1>This is rendered only in browser</h1>
            </BrowserView>
            <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView>

        </div>
    );
};

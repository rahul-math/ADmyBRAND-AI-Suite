
import React from 'react';

const defaultProps: React.SVGProps<SVGSVGElement> = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
};

export const SoundWaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 9v6h3.75l5.25 5.25V3.75L7.5 9H3.75zm13.5 0v6m-3.75-3.75v1.5m-3.75-1.5v1.5m-3.75-1.5v1.5" })
    )
);

export const AiBotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 8.25h9m-9 3H12m-2.25 6.75h3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);

export const PixelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" })
    )
);

export const DataBoxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" })
    )
);

export const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" })
    )
);

export const BlockchainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 6.375l-4.125 4.125-4.125-4.125m0 0l-1.5 1.5 4.125 4.125-1.5 1.5m4.125-7.125l1.5-1.5 4.125 4.125-4.125 4.125-1.5-1.5m-2.625 2.625l4.125-4.125" })
    )
);

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a16.957 16.957 0 01-1.21-.922c-.655-.5-1.233-1.05-1.789-1.625a4.5 4.5 0 00-6.364-6.364l-1.02.995m11.35 11.35l-1.02-.995m-2.56-5.84a6 6 0 01-8.246-8.246l.001-.001m8.245 8.245L9.75 9.75M14.37 15.6a6 6 0 01-5.84-7.38m5.84 7.38a6 6 0 017.38-5.84m-7.38 5.84l2.56-2.56" })
    )
);

export const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
    )
);

export const SocialIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.55c0 2.58.984 4.945 2.633 6.685l.484 1.013-.232 2.138 2.22-1.163.662.33.928.455A8.953 8.953 0 0012 20.25z" })
    )
);

export const BillboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6.75V15m6-6v8.25m.5-10.5h-7a.5.5 0 00-.5.5v11c0 .276.224.5.5.5h7a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zM3.75 9h.008v.008H3.75V9zm16.5 0h.008v.008h-.008V9z" })
    )
);

export const ScreenDeviceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21M9 17.25v-10.5a2.25 2.25 0 00-2.25-2.25H3.375c-1.24 0-2.25 1.01-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h3.375c.621 0 1.125-.504 1.125-1.125V17.25zM9 17.25h12M15 13.5h.008v.008H15v-.008z" })
    )
);

export const MobileDeviceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-2.25m-3 0V3m3 0V3m0 18v-1.5m-3 0v-1.5m-6-3H12" })
    )
);

export const NewspaperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" })
    )
);

export const ChecklistIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" })
    )
);

export const DesignToolIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 15.75l-3.75-3.75M12 15.75l3.75-3.75M12 15.75V3M18.375 9.125a6 6 0 10-12.75 0" })
    )
);

export const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" })
    )
);

export const PageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" })
    )
);

export const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-4.14-4.14M10.5 6.002v3m0 3v3.998" })
    )
);

export const FeedbackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 8.25h9m-9 3H12m3.75 3.75-3-3L9 15m-3.75-3.75h.008v.008H5.25v-.008zM9 8.25h.008v.008H9v-.008zm3.75 0h.008v.008h-.008v-.008zm2.25-4.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h9z" })
    )
);

export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023-.095-2.21-1.047-2.735-1.18-.62-2.618-1.01-4.04-1.01m9.04 8.038c1.32.373 2.74.563 4.21.563m-8.42 0c-1.47 0-2.89-.19-4.21-.563m5.241-8.527a3.75 3.75 0 016.32 0m-6.32 0a3.75 3.75 0 00-6.32 0m12.64 0a3.75 3.75 0 01-6.32 0m6.32 0a3.75 3.75 0 00-6.32 0M6.331 7.468a3.75 3.75 0 016.32 0" })
    )
);

export const LoanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6V4.5m0 0h1.5m-1.5 0V3.75c0-.621.504-1.125 1.125-1.125H10.5a2.25 2.25 0 012.25 2.25v.75m-3-3h6.375c.621 0 1.125.504 1.125 1.125V18.75m0-15.375a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V3.375z" })
    )
);

export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...defaultProps, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" })
    )
);

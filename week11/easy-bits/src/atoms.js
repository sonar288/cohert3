import {atom, selector} from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default:220
});
export const jobAtom = atom({
    key:"jobAtom",
    default:0
});
export const notifictionAtom = atom({
    key:"notifictionAtom",
    default:12
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
});


export const totalNotificationSelector = selector({
    key:"totalNotification",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom);
        const notificationCount = get(notifictionAtom);
        const jobCount = get(jobAtom);
        const messagingCount = get(messagingAtom);
        return(networkAtomCount+notificationCount+jobCount+messagingCount)

    }
})
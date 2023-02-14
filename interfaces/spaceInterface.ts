interface ILaunchSite {
    "site_name_long": string
}

interface ILinks {
    "article_link": null;
    "video_link": string
}

interface ICore {
    "reuse_count": number;
    "status": string;
}

interface ICores {
            "flight": number;
            "core": ICore
}

interface IFirstStage {
    "cores": ICores[]
}

interface IPayloads {
    "payload_type": string;
    "payload_mass_kg": number;
    "payload_mass_lbs": number
}

interface ISecondStage {
    "payloads": IPayloads[]
}

interface IRocket {
    "rocket_name": string;
    "first_stage": IFirstStage
    "second_stage": ISecondStage
}

interface ISpaceX {
    "mission_name": string;
    "launch_date_local": string;
    "launch_site": ILaunchSite;
    "links": ILinks;
    "rocket": IRocket
}

export {
    ISpaceX
}
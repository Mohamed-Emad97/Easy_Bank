import { api, budgeting, onboarding, online, blogImgFour, blogImgOne, blogImgTwo, blogImgThree } from "./imgs";

export const aboutCards = [
    {
        title: `Online Banking`,
        desc: `Our modern web and mobile 
                applications alow you to keep 
                track of your finances wherever you
                are in the world.`,
        img: online,
    },
    {
        title: `Simple Budgeting`,
        desc: `See exactly where your maney
        goes each month. Receve
        notifications when you're close to 
        hitting your limits.`,
        img: budgeting,
    },
    {
        title: `Fast Onboarding`,
        desc: `We don't do branches. Open your 
        account in minutes online and start
        taking control of your finances
        right away.`,
        img: onboarding,
    },
    {
        title: `Open API`,
        desc: `Manage your saving, investments, 
        pension, and much more from one
        account. Tracking your money has
        never been easier.`,
        img: api,
    }
] 

export const blogCards = [
    {
        title: `Receive money in any currency with no fees`,
        writer: `By Claire Robinson`,
        desc: `The world is getting smaller and 
        we're becoming more mobile. So
        why should you be forced to only
        receive money in a single ...`,
        img: blogImgOne,
    },
    {
        title: `Treat yourself without worring about money`,
        writer: `By Wilson Hutton`,
        desc: `Our simple budgeting feature
        allows you to separate out your
        spending and set reaslistic limits 
        each month. That means you ....`,
        img: blogImgOne,
    },
    {
        title: `Take your Easybank card whenever you go`,
        writer: `By Wilson Hutton`,
        desc: `We want you to enjoy your travels.
        This is why we don't charge any
        fees on purchases while you're
        abroad. We'll even show you ...`,
        img: blogImgThree,
    },
    {
        title: `Our invite-only Beta accounts are now live!`,
        writer: `By Claire Robison`,
        desc: `After a lot of hard work by the
        whole team, we're excited to launch
        our closed beta. It's easy to request 
        an invite through the site ...`,
        img: blogImgFour,
    }
]
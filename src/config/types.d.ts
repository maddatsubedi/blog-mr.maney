export type ContactFormConfig = {
    enable: boolean,
    disabled_message: string,
    notify_email: string
}

export type Notify = {
    admin: boolean,
    user: boolean
}

export type NotifyFrom = {
    display_name: string,
    local_part: string
}

export type EmailContent = {
    header: {
        text: string
    },
    description: {
        text: string
    },
    note: {
        text: string
    },
    footer: {
        text: string,
        name: string
    }
}

export type NotifyEmailConfig = {
    notify_from: NotifyFrom,
    subject: {
        text: string
    },
    email_content: EmailContent,
}

export type NotiConfig = {
    notify: Notify,
    notify_email_config: NotifyEmailConfig
}

export type Contact = {
    contact_form: ContactFormConfig,
    noti_config: NotiConfig,
}
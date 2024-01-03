import { z } from 'zod';
export declare const jobBoardSchema: z.ZodObject<{
    id: z.ZodNumber;
    root_domain: z.ZodString;
    domains: z.ZodArray<z.ZodString, "many">;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    root_domain: string;
    domains: string[];
    name: string;
    created_at: string;
    updated_at: string;
}, {
    id: number;
    root_domain: string;
    domains: string[];
    name: string;
    created_at: string;
    updated_at: string;
}>;
export declare const companySchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const questionSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
}, {
    id: number;
    title: string;
}>;
export declare const resultSchema: z.ZodObject<{
    id: z.ZodNumber;
    outcome: z.ZodString;
    date: z.ZodString;
    notes: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    id: number;
    date: string;
    outcome: string;
    notes?: any;
}, {
    id: number;
    date: string;
    outcome: string;
    notes?: any;
}>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
}, {
    id: number;
    full_name: string;
}>;
export declare const contactSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    contact_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contact_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedin_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contact_role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: number | null | undefined;
    contact_name?: string | null | undefined;
    contact_email?: string | null | undefined;
    linkedin_url?: string | null | undefined;
    contact_role?: string | null | undefined;
}, {
    id?: number | null | undefined;
    contact_name?: string | null | undefined;
    contact_email?: string | null | undefined;
    linkedin_url?: string | null | undefined;
    contact_role?: string | null | undefined;
}>;
export declare const industrySchema: z.ZodObject<{
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    created_at: string;
    updated_at: string;
}, {
    name: string;
    created_at: string;
    updated_at: string;
}>;
export declare const organizationSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    trial_type: z.ZodString;
    api_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}>;
export declare const skillSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const veryComfortableSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const result2Schema: z.ZodObject<{
    status: z.ZodBoolean;
    edly_reason: z.ZodArray<z.ZodAny, "many">;
    edly_result: z.ZodBoolean;
    leif_reason: z.ZodArray<z.ZodAny, "many">;
    leif_result: z.ZodBoolean;
    climb_reason: z.ZodArray<z.ZodAny, "many">;
    climb_result: z.ZodBoolean;
    stride_reason: z.ZodArray<z.ZodAny, "many">;
    stride_result: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    status: boolean;
    edly_reason: any[];
    edly_result: boolean;
    leif_reason: any[];
    leif_result: boolean;
    climb_reason: any[];
    climb_result: boolean;
    stride_reason: any[];
    stride_result: boolean;
}, {
    status: boolean;
    edly_reason: any[];
    edly_result: boolean;
    leif_reason: any[];
    leif_result: boolean;
    climb_reason: any[];
    climb_result: boolean;
    stride_reason: any[];
    stride_result: boolean;
}>;
export declare const pteFlowSchema: z.ZodObject<{
    completed_at: z.ZodString;
    financing: z.ZodString;
    plan: z.ZodString;
    pricing: z.ZodString;
    financing_application_completed_date: z.ZodString;
}, "strip", z.ZodTypeAny, {
    completed_at: string;
    financing: string;
    plan: string;
    pricing: string;
    financing_application_completed_date: string;
}, {
    completed_at: string;
    financing: string;
    plan: string;
    pricing: string;
    financing_application_completed_date: string;
}>;
export declare const industry2Schema: z.ZodObject<{
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    created_at: string;
    updated_at: string;
}, {
    name: string;
    created_at: string;
    updated_at: string;
}>;
export declare const organization2Schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    trial_type: z.ZodString;
    api_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}>;
export declare const skill2Schema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const veryComfortable2Schema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const coreAdvisorSchema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
    email: z.ZodString;
    disabled: z.ZodBoolean;
    avatar: z.ZodString;
    linkedin: z.ZodString;
    about: z.ZodAny;
    role: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}>;
export declare const supportAdvisorSchema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
    email: z.ZodString;
    disabled: z.ZodBoolean;
    avatar: z.ZodString;
    linkedin: z.ZodString;
    about: z.ZodAny;
    role: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}>;
export declare const jobSearchOwnerSchema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
    email: z.ZodString;
    disabled: z.ZodBoolean;
    avatar: z.ZodString;
    linkedin: z.ZodString;
    about: z.ZodAny;
    role: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    linkedin: string;
    role: string;
    about?: any;
}>;
export declare const organization3Schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    trial_type: z.ZodString;
    api_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}>;
export declare const subscriptionTierSchema: z.ZodObject<{
    slug: z.ZodString;
    type: z.ZodString;
    limit_credits: z.ZodBoolean;
    max_credits: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    slug: string;
    limit_credits: boolean;
    max_credits: number;
}, {
    type: string;
    slug: string;
    limit_credits: boolean;
    max_credits: number;
}>;
export declare const programManagerSchema: z.ZodObject<{
    full_name: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    full_name?: any;
}, {
    full_name?: any;
}>;
export declare const settingSchema: z.ZodObject<{
    id: z.ZodNumber;
    active: z.ZodBoolean;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    active: boolean;
}, {
    id: number;
    name: string;
    active: boolean;
}>;
export declare const surveyDefaultParamsSchema: z.ZodObject<{
    user_id: z.ZodNumber;
    fellow_email: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    track: z.ZodString;
    cohort: z.ZodString;
    mentor_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user_id: number;
    fellow_email: string;
    first_name: string;
    last_name: string;
    track: string;
    cohort: string;
    mentor_name: string;
}, {
    user_id: number;
    fellow_email: string;
    first_name: string;
    last_name: string;
    track: string;
    cohort: string;
    mentor_name: string;
}>;
export declare const trialOwnerSchema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
    email: z.ZodString;
    disabled: z.ZodBoolean;
    avatar: z.ZodString;
    main_mentor: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    main_mentor: boolean;
}, {
    id: number;
    full_name: string;
    email: string;
    disabled: boolean;
    avatar: string;
    main_mentor: boolean;
}>;
export declare const fellow2Schema: z.ZodObject<{
    id: z.ZodNumber;
    full_name: z.ZodString;
    avatar_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    avatar_url: string;
}, {
    id: number;
    full_name: string;
    avatar_url: string;
}>;
export declare const creatorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    avatar_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    full_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    full_name: string;
    id?: number | null | undefined;
    role?: string | null | undefined;
    avatar_url?: string | null | undefined;
}, {
    full_name: string;
    id?: number | null | undefined;
    role?: string | null | undefined;
    avatar_url?: string | null | undefined;
}>;
export declare const dataSchema: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export declare const sessionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: number | null | undefined;
    topic?: string | null | undefined;
}, {
    id?: number | null | undefined;
    topic?: string | null | undefined;
}>;
export declare const fellow3Schema: z.ZodObject<{
    id: z.ZodNumber;
    has_finalized_resume: z.ZodBoolean;
    avatar_url: z.ZodString;
    full_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    avatar_url: string;
    has_finalized_resume: boolean;
}, {
    id: number;
    full_name: string;
    avatar_url: string;
    has_finalized_resume: boolean;
}>;
export declare const creator2Schema: z.ZodObject<{
    id: z.ZodNumber;
    avatar_url: z.ZodString;
    full_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    avatar_url: string;
}, {
    id: number;
    full_name: string;
    avatar_url: string;
}>;
export declare const infractionCategorySchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const industry3Schema: z.ZodObject<{
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    created_at: string;
    updated_at: string;
}, {
    name: string;
    created_at: string;
    updated_at: string;
}>;
export declare const organization4Schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    trial_type: z.ZodString;
    api_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}>;
export declare const skill3Schema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const veryComfortable3Schema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
    selected: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
    selected: boolean;
}, {
    value: number;
    label: string;
    selected: boolean;
}>;
export declare const jobBoard2Schema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: number;
    label: string;
}, {
    value: number;
    label: string;
}>;
export declare const avatarSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const attendanceOverridesSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const fsmCallSchema: z.ZodObject<{
    event_type: z.ZodString;
    override_count: z.ZodNumber;
    override_status: z.ZodString;
    calculated_status: z.ZodString;
    override_status_author: z.ZodString;
}, "strip", z.ZodTypeAny, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
}, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
}>;
export declare const careerKickoffSchema: z.ZodObject<{
    event_type: z.ZodString;
    override_count: z.ZodNumber;
    scheduled_date: z.ZodString;
    override_status: z.ZodString;
    calculated_status: z.ZodString;
    override_status_author: z.ZodString;
}, "strip", z.ZodTypeAny, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
    scheduled_date: string;
}, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
    scheduled_date: string;
}>;
export declare const industryKickoffSchema: z.ZodObject<{
    event_type: z.ZodString;
    override_count: z.ZodNumber;
    scheduled_date: z.ZodString;
    override_status: z.ZodString;
    calculated_status: z.ZodString;
    override_status_author: z.ZodString;
}, "strip", z.ZodTypeAny, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
    scheduled_date: string;
}, {
    event_type: string;
    override_count: number;
    override_status: string;
    calculated_status: string;
    override_status_author: string;
    scheduled_date: string;
}>;
export declare const skillsGrowthPlanOptionSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const strategySchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const organization5Schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    trial_type: z.ZodString;
    api_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}, {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    trial_type: string;
    api_name: string;
}>;
export declare const skillsByCategory4Schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const user2Schema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    role: z.ZodString;
    full_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    full_name: string;
    email: string;
    role: string;
}, {
    id: number;
    full_name: string;
    email: string;
    role: string;
}>;
export declare const stageSchema: z.ZodObject<{
    id: z.ZodNumber;
    date: z.ZodString;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    round: z.ZodNumber;
    created_at: z.ZodString;
    interview_type: z.ZodString;
    company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    is_interview: z.ZodBoolean;
    questions: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title: string;
    }, {
        id: number;
        title: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    date: string;
    created_at: string;
    round: number;
    interview_type: string;
    is_interview: boolean;
    questions: {
        id: number;
        title: string;
    }[];
    notes?: string | null | undefined;
    company_id?: number | null | undefined;
}, {
    id: number;
    date: string;
    created_at: string;
    round: number;
    interview_type: string;
    is_interview: boolean;
    questions: {
        id: number;
        title: string;
    }[];
    notes?: string | null | undefined;
    company_id?: number | null | undefined;
}>;
export declare const pipelineConnectionSchema: z.ZodObject<{
    id: z.ZodNumber;
    channel: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
    }, {
        id: number;
        full_name: string;
    }>;
    contact: z.ZodObject<{
        id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        contact_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        contact_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        linkedin_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        contact_role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: number | null | undefined;
        contact_name?: string | null | undefined;
        contact_email?: string | null | undefined;
        linkedin_url?: string | null | undefined;
        contact_role?: string | null | undefined;
    }, {
        id?: number | null | undefined;
        contact_name?: string | null | undefined;
        contact_email?: string | null | undefined;
        linkedin_url?: string | null | undefined;
        contact_role?: string | null | undefined;
    }>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    outreach_date: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_at: string;
    updated_at: string;
    channel: string;
    user: {
        id: number;
        full_name: string;
    };
    contact: {
        id?: number | null | undefined;
        contact_name?: string | null | undefined;
        contact_email?: string | null | undefined;
        linkedin_url?: string | null | undefined;
        contact_role?: string | null | undefined;
    };
    outreach_date: string;
}, {
    id: number;
    created_at: string;
    updated_at: string;
    channel: string;
    user: {
        id: number;
        full_name: string;
    };
    contact: {
        id?: number | null | undefined;
        contact_name?: string | null | undefined;
        contact_email?: string | null | undefined;
        linkedin_url?: string | null | undefined;
        contact_role?: string | null | undefined;
    };
    outreach_date: string;
}>;
export declare const skillsByCategorySchema: z.ZodObject<{
    very_comfortable: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}>;
export declare const creditCheckSchema: z.ZodObject<{
    result: z.ZodObject<{
        status: z.ZodBoolean;
        edly_reason: z.ZodArray<z.ZodAny, "many">;
        edly_result: z.ZodBoolean;
        leif_reason: z.ZodArray<z.ZodAny, "many">;
        leif_result: z.ZodBoolean;
        climb_reason: z.ZodArray<z.ZodAny, "many">;
        climb_result: z.ZodBoolean;
        stride_reason: z.ZodArray<z.ZodAny, "many">;
        stride_result: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        status: boolean;
        edly_reason: any[];
        edly_result: boolean;
        leif_reason: any[];
        leif_result: boolean;
        climb_reason: any[];
        climb_result: boolean;
        stride_reason: any[];
        stride_result: boolean;
    }, {
        status: boolean;
        edly_reason: any[];
        edly_result: boolean;
        leif_reason: any[];
        leif_result: boolean;
        climb_reason: any[];
        climb_result: boolean;
        stride_reason: any[];
        stride_result: boolean;
    }>;
    financing_options: z.ZodArray<z.ZodString, "many">;
    ssn_provided: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    result: {
        status: boolean;
        edly_reason: any[];
        edly_result: boolean;
        leif_reason: any[];
        leif_result: boolean;
        climb_reason: any[];
        climb_result: boolean;
        stride_reason: any[];
        stride_result: boolean;
    };
    financing_options: string[];
    ssn_provided: boolean;
}, {
    result: {
        status: boolean;
        edly_reason: any[];
        edly_result: boolean;
        leif_reason: any[];
        leif_result: boolean;
        climb_reason: any[];
        climb_result: boolean;
        stride_reason: any[];
        stride_result: boolean;
    };
    financing_options: string[];
    ssn_provided: boolean;
}>;
export declare const skillsByCategory2Schema: z.ZodObject<{
    very_comfortable: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}>;
export declare const extFormSubmissionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id?: number | null | undefined;
    data?: {
        value: string;
    } | null | undefined;
}, {
    id?: number | null | undefined;
    data?: {
        value: string;
    } | null | undefined;
}>;
export declare const fellowTaskSchema: z.ZodObject<{
    id: z.ZodNumber;
    segment: z.ZodString;
    api_name: z.ZodAny;
    body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_at: z.ZodString;
    completion_status: z.ZodString;
    created_at: z.ZodString;
    start_date: z.ZodAny;
    due_on: z.ZodString;
    onboarding: z.ZodBoolean;
    syllabus: z.ZodBoolean;
    priority_status: z.ZodString;
    hide_from_fellow: z.ZodBoolean;
    note_id: z.ZodAny;
    title: z.ZodString;
    template_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    template_api_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weekly_check_in: z.ZodBoolean;
    is_auto_created: z.ZodBoolean;
    category: z.ZodAny;
    non_completion_reason: z.ZodAny;
    non_completion_explanation: z.ZodAny;
    data: z.ZodAny;
    resolved_at: z.ZodString;
    meeting_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    completed_by: z.ZodString;
    fellow: z.ZodObject<{
        id: z.ZodNumber;
        has_finalized_resume: z.ZodBoolean;
        avatar_url: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        avatar_url: string;
        has_finalized_resume: boolean;
    }, {
        id: number;
        full_name: string;
        avatar_url: string;
        has_finalized_resume: boolean;
    }>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        avatar_url: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        avatar_url: string;
    }, {
        id: number;
        full_name: string;
        avatar_url: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_at: string;
    title: string;
    completed_at: string;
    segment: string;
    completion_status: string;
    due_on: string;
    onboarding: boolean;
    syllabus: boolean;
    priority_status: string;
    hide_from_fellow: boolean;
    weekly_check_in: boolean;
    is_auto_created: boolean;
    resolved_at: string;
    completed_by: string;
    fellow: {
        id: number;
        full_name: string;
        avatar_url: string;
        has_finalized_resume: boolean;
    };
    api_name?: any;
    body?: string | null | undefined;
    start_date?: any;
    note_id?: any;
    template_id?: number | null | undefined;
    template_api_name?: string | null | undefined;
    category?: any;
    non_completion_reason?: any;
    non_completion_explanation?: any;
    data?: any;
    meeting_id?: number | null | undefined;
    creator?: {
        id: number;
        full_name: string;
        avatar_url: string;
    } | null | undefined;
}, {
    id: number;
    created_at: string;
    title: string;
    completed_at: string;
    segment: string;
    completion_status: string;
    due_on: string;
    onboarding: boolean;
    syllabus: boolean;
    priority_status: string;
    hide_from_fellow: boolean;
    weekly_check_in: boolean;
    is_auto_created: boolean;
    resolved_at: string;
    completed_by: string;
    fellow: {
        id: number;
        full_name: string;
        avatar_url: string;
        has_finalized_resume: boolean;
    };
    api_name?: any;
    body?: string | null | undefined;
    start_date?: any;
    note_id?: any;
    template_id?: number | null | undefined;
    template_api_name?: string | null | undefined;
    category?: any;
    non_completion_reason?: any;
    non_completion_explanation?: any;
    data?: any;
    meeting_id?: number | null | undefined;
    creator?: {
        id: number;
        full_name: string;
        avatar_url: string;
    } | null | undefined;
}>;
export declare const skillsByCategory3Schema: z.ZodObject<{
    very_comfortable: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}, {
    very_comfortable: {
        value: number;
        label: string;
        selected: boolean;
    }[];
}>;
export declare const eventStatusSchema: z.ZodObject<{
    fsm_call: z.ZodObject<{
        event_type: z.ZodString;
        override_count: z.ZodNumber;
        override_status: z.ZodString;
        calculated_status: z.ZodString;
        override_status_author: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
    }, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
    }>;
    career_kickoff: z.ZodObject<{
        event_type: z.ZodString;
        override_count: z.ZodNumber;
        scheduled_date: z.ZodString;
        override_status: z.ZodString;
        calculated_status: z.ZodString;
        override_status_author: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    }, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    }>;
    industry_kickoff: z.ZodObject<{
        event_type: z.ZodString;
        override_count: z.ZodNumber;
        scheduled_date: z.ZodString;
        override_status: z.ZodString;
        calculated_status: z.ZodString;
        override_status_author: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    }, {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    }>;
}, "strip", z.ZodTypeAny, {
    fsm_call: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
    };
    career_kickoff: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    };
    industry_kickoff: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    };
}, {
    fsm_call: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
    };
    career_kickoff: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    };
    industry_kickoff: {
        event_type: string;
        override_count: number;
        override_status: string;
        calculated_status: string;
        override_status_author: string;
        scheduled_date: string;
    };
}>;
export declare const trialOwner2Schema: z.ZodObject<{
    id: z.ZodNumber;
    avatar: z.ZodString;
    calendly_link: z.ZodString;
    email: z.ZodString;
    linkedin: z.ZodAny;
    first_name: z.ZodString;
    last_name: z.ZodString;
    full_name: z.ZodString;
    job_title: z.ZodAny;
    job_history: z.ZodArray<z.ZodAny, "many">;
    job_roles: z.ZodArray<z.ZodAny, "many">;
    industries: z.ZodArray<z.ZodAny, "many">;
    organization: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        trial_type: z.ZodString;
        api_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }>;
    role: z.ZodString;
    skills: z.ZodArray<z.ZodAny, "many">;
    skills_by_category: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    summary: z.ZodAny;
    track: z.ZodAny;
    label: z.ZodString;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_history: any[];
    job_roles: any[];
    industries: any[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: any[];
    skills_by_category: {};
    linkedin?: any;
    job_title?: any;
    summary?: any;
    track?: any;
}, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_history: any[];
    job_roles: any[];
    industries: any[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: any[];
    skills_by_category: {};
    linkedin?: any;
    job_title?: any;
    summary?: any;
    track?: any;
}>;
export declare const appProcessSchema: z.ZodObject<{
    archived_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company: z.ZodObject<{
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
    company_name: z.ZodString;
    created_at: z.ZodString;
    id: z.ZodNumber;
    interest: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    is_remote: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    job_application_context: z.ZodString;
    job_board: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        root_domain: z.ZodString;
        domains: z.ZodArray<z.ZodString, "many">;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        root_domain: string;
        domains: string[];
        name: string;
        created_at: string;
        updated_at: string;
    }, {
        id: number;
        root_domain: string;
        domains: string[];
        name: string;
        created_at: string;
        updated_at: string;
    }>>>;
    job_rec_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    job_title: z.ZodString;
    job_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pipeline_connections: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        channel: z.ZodString;
        user: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
        }, {
            id: number;
            full_name: string;
        }>;
        contact: z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            contact_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            contact_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            linkedin_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            contact_role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        }, {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        }>;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        outreach_date: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        created_at: string;
        updated_at: string;
        channel: string;
        user: {
            id: number;
            full_name: string;
        };
        contact: {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        };
        outreach_date: string;
    }, {
        id: number;
        created_at: string;
        updated_at: string;
        channel: string;
        user: {
            id: number;
            full_name: string;
        };
        contact: {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        };
        outreach_date: string;
    }>, "many">;
    result: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        outcome: z.ZodString;
        date: z.ZodString;
        notes: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        id: number;
        date: string;
        outcome: string;
        notes?: any;
    }, {
        id: number;
        date: string;
        outcome: string;
        notes?: any;
    }>>>;
    sourced_job: z.ZodAny;
    stages: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        date: z.ZodString;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        round: z.ZodNumber;
        created_at: z.ZodString;
        interview_type: z.ZodString;
        company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        is_interview: z.ZodBoolean;
        questions: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            title: string;
        }, {
            id: number;
            title: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        date: string;
        created_at: string;
        round: number;
        interview_type: string;
        is_interview: boolean;
        questions: {
            id: number;
            title: string;
        }[];
        notes?: string | null | undefined;
        company_id?: number | null | undefined;
    }, {
        id: number;
        date: string;
        created_at: string;
        round: number;
        interview_type: string;
        is_interview: boolean;
        questions: {
            id: number;
            title: string;
        }[];
        notes?: string | null | undefined;
        company_id?: number | null | undefined;
    }>, "many">;
    status: z.ZodString;
    strategies: z.ZodArray<z.ZodAny, "many">;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    status: string;
    created_at: string;
    updated_at: string;
    job_title: string;
    company: {
        id: number;
    };
    company_name: string;
    job_application_context: string;
    pipeline_connections: {
        id: number;
        created_at: string;
        updated_at: string;
        channel: string;
        user: {
            id: number;
            full_name: string;
        };
        contact: {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        };
        outreach_date: string;
    }[];
    stages: {
        id: number;
        date: string;
        created_at: string;
        round: number;
        interview_type: string;
        is_interview: boolean;
        questions: {
            id: number;
            title: string;
        }[];
        notes?: string | null | undefined;
        company_id?: number | null | undefined;
    }[];
    strategies: any[];
    archived_at?: string | null | undefined;
    interest?: number | null | undefined;
    is_remote?: boolean | null | undefined;
    job_board?: {
        id: number;
        root_domain: string;
        domains: string[];
        name: string;
        created_at: string;
        updated_at: string;
    } | null | undefined;
    job_rec_id?: number | null | undefined;
    job_url?: string | null | undefined;
    notes?: string | null | undefined;
    result?: {
        id: number;
        date: string;
        outcome: string;
        notes?: any;
    } | null | undefined;
    sourced_job?: any;
}, {
    id: number;
    status: string;
    created_at: string;
    updated_at: string;
    job_title: string;
    company: {
        id: number;
    };
    company_name: string;
    job_application_context: string;
    pipeline_connections: {
        id: number;
        created_at: string;
        updated_at: string;
        channel: string;
        user: {
            id: number;
            full_name: string;
        };
        contact: {
            id?: number | null | undefined;
            contact_name?: string | null | undefined;
            contact_email?: string | null | undefined;
            linkedin_url?: string | null | undefined;
            contact_role?: string | null | undefined;
        };
        outreach_date: string;
    }[];
    stages: {
        id: number;
        date: string;
        created_at: string;
        round: number;
        interview_type: string;
        is_interview: boolean;
        questions: {
            id: number;
            title: string;
        }[];
        notes?: string | null | undefined;
        company_id?: number | null | undefined;
    }[];
    strategies: any[];
    archived_at?: string | null | undefined;
    interest?: number | null | undefined;
    is_remote?: boolean | null | undefined;
    job_board?: {
        id: number;
        root_domain: string;
        domains: string[];
        name: string;
        created_at: string;
        updated_at: string;
    } | null | undefined;
    job_rec_id?: number | null | undefined;
    job_url?: string | null | undefined;
    notes?: string | null | undefined;
    result?: {
        id: number;
        date: string;
        outcome: string;
        notes?: any;
    } | null | undefined;
    sourced_job?: any;
}>;
export type AppProcess = z.infer<typeof appProcessSchema>;
export declare const careerMentorSchema: z.ZodObject<{
    id: z.ZodNumber;
    avatar: z.ZodString;
    calendly_link: z.ZodString;
    email: z.ZodString;
    linkedin: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    full_name: z.ZodString;
    job_title: z.ZodString;
    job_history: z.ZodArray<z.ZodString, "many">;
    job_roles: z.ZodArray<z.ZodAny, "many">;
    industries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        created_at: string;
        updated_at: string;
    }, {
        name: string;
        created_at: string;
        updated_at: string;
    }>, "many">;
    organization: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        trial_type: z.ZodString;
        api_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }>;
    role: z.ZodString;
    skills: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
    skills_by_category: z.ZodObject<{
        very_comfortable: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }>;
    summary: z.ZodString;
    track: z.ZodAny;
    label: z.ZodString;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}>;
export declare const careerMentor2Schema: z.ZodObject<{
    id: z.ZodNumber;
    avatar: z.ZodString;
    calendly_link: z.ZodString;
    email: z.ZodString;
    linkedin: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    full_name: z.ZodString;
    job_title: z.ZodString;
    job_history: z.ZodArray<z.ZodString, "many">;
    job_roles: z.ZodArray<z.ZodAny, "many">;
    industries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        created_at: string;
        updated_at: string;
    }, {
        name: string;
        created_at: string;
        updated_at: string;
    }>, "many">;
    organization: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        trial_type: z.ZodString;
        api_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }>;
    role: z.ZodString;
    skills: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
    skills_by_category: z.ZodObject<{
        very_comfortable: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }>;
    summary: z.ZodString;
    track: z.ZodAny;
    label: z.ZodString;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}>;
export declare const fellowNoteSchema: z.ZodObject<{
    id: z.ZodNumber;
    body: z.ZodString;
    mixed_private_body: z.ZodString;
    mixed: z.ZodBoolean;
    created_at: z.ZodString;
    fellow: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
        avatar_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        avatar_url: string;
    }, {
        id: number;
        full_name: string;
        avatar_url: string;
    }>;
    creator: z.ZodObject<{
        id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        avatar_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        full_name: string;
        id?: number | null | undefined;
        role?: string | null | undefined;
        avatar_url?: string | null | undefined;
    }, {
        full_name: string;
        id?: number | null | undefined;
        role?: string | null | undefined;
        avatar_url?: string | null | undefined;
    }>;
    date: z.ZodString;
    ext_form_submission: z.ZodObject<{
        id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id?: number | null | undefined;
        data?: {
            value: string;
        } | null | undefined;
    }, {
        id?: number | null | undefined;
        data?: {
            value: string;
        } | null | undefined;
    }>;
    ext_form_submission_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ext_form_submission_completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    meeting_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tasks: z.ZodArray<z.ZodAny, "many">;
    template: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    template_is_session: z.ZodBoolean;
    was_session: z.ZodBoolean;
    updated_at: z.ZodString;
    visible_to_fellow: z.ZodBoolean;
    visible_for_all_mentors: z.ZodBoolean;
    weekly_check_in: z.ZodBoolean;
    week_two_check_in: z.ZodBoolean;
    note_modules: z.ZodArray<z.ZodString, "many">;
    is_auto_created: z.ZodBoolean;
    isPublished: z.ZodBoolean;
    rePublish: z.ZodBoolean;
    publishedStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fellow_view_count: z.ZodNumber;
    completion_status: z.ZodAny;
    embedded_attendance_reason: z.ZodString;
    embedded_fellow_reason: z.ZodAny;
    embedded_reschedule_cancellation_details: z.ZodAny;
    accountability_id: z.ZodAny;
    accountability_reason: z.ZodAny;
    canceled_accountability: z.ZodBoolean;
    infraction_count: z.ZodNumber;
    warning_count: z.ZodNumber;
    session: z.ZodObject<{
        id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: number | null | undefined;
        topic?: string | null | undefined;
    }, {
        id?: number | null | undefined;
        topic?: string | null | undefined;
    }>;
    accountability_record_type: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    id: number;
    date: string;
    created_at: string;
    updated_at: string;
    body: string;
    weekly_check_in: boolean;
    is_auto_created: boolean;
    fellow: {
        id: number;
        full_name: string;
        avatar_url: string;
    };
    creator: {
        full_name: string;
        id?: number | null | undefined;
        role?: string | null | undefined;
        avatar_url?: string | null | undefined;
    };
    mixed_private_body: string;
    mixed: boolean;
    ext_form_submission: {
        id?: number | null | undefined;
        data?: {
            value: string;
        } | null | undefined;
    };
    tasks: any[];
    template_is_session: boolean;
    was_session: boolean;
    visible_to_fellow: boolean;
    visible_for_all_mentors: boolean;
    week_two_check_in: boolean;
    note_modules: string[];
    isPublished: boolean;
    rePublish: boolean;
    fellow_view_count: number;
    embedded_attendance_reason: string;
    canceled_accountability: boolean;
    infraction_count: number;
    warning_count: number;
    session: {
        id?: number | null | undefined;
        topic?: string | null | undefined;
    };
    ext_form_submission_status?: string | null | undefined;
    ext_form_submission_completed_at?: string | null | undefined;
    meeting_id?: number | null | undefined;
    template?: string | null | undefined;
    publishedStatus?: string | null | undefined;
    completion_status?: any;
    embedded_fellow_reason?: any;
    embedded_reschedule_cancellation_details?: any;
    accountability_id?: any;
    accountability_reason?: any;
    accountability_record_type?: any;
}, {
    id: number;
    date: string;
    created_at: string;
    updated_at: string;
    body: string;
    weekly_check_in: boolean;
    is_auto_created: boolean;
    fellow: {
        id: number;
        full_name: string;
        avatar_url: string;
    };
    creator: {
        full_name: string;
        id?: number | null | undefined;
        role?: string | null | undefined;
        avatar_url?: string | null | undefined;
    };
    mixed_private_body: string;
    mixed: boolean;
    ext_form_submission: {
        id?: number | null | undefined;
        data?: {
            value: string;
        } | null | undefined;
    };
    tasks: any[];
    template_is_session: boolean;
    was_session: boolean;
    visible_to_fellow: boolean;
    visible_for_all_mentors: boolean;
    week_two_check_in: boolean;
    note_modules: string[];
    isPublished: boolean;
    rePublish: boolean;
    fellow_view_count: number;
    embedded_attendance_reason: string;
    canceled_accountability: boolean;
    infraction_count: number;
    warning_count: number;
    session: {
        id?: number | null | undefined;
        topic?: string | null | undefined;
    };
    ext_form_submission_status?: string | null | undefined;
    ext_form_submission_completed_at?: string | null | undefined;
    meeting_id?: number | null | undefined;
    template?: string | null | undefined;
    publishedStatus?: string | null | undefined;
    completion_status?: any;
    embedded_fellow_reason?: any;
    embedded_reschedule_cancellation_details?: any;
    accountability_id?: any;
    accountability_reason?: any;
    accountability_record_type?: any;
}>;
export declare const industryMentorSchema: z.ZodObject<{
    id: z.ZodNumber;
    avatar: z.ZodString;
    calendly_link: z.ZodString;
    email: z.ZodString;
    linkedin: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    full_name: z.ZodString;
    job_title: z.ZodString;
    job_history: z.ZodArray<z.ZodString, "many">;
    job_roles: z.ZodArray<z.ZodAny, "many">;
    industries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        created_at: string;
        updated_at: string;
    }, {
        name: string;
        created_at: string;
        updated_at: string;
    }>, "many">;
    organization: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        trial_type: z.ZodString;
        api_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }>;
    role: z.ZodString;
    skills: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
        selected: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        selected: boolean;
    }, {
        value: number;
        label: string;
        selected: boolean;
    }>, "many">;
    skills_by_category: z.ZodObject<{
        very_comfortable: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }, {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    }>;
    summary: z.ZodString;
    track: z.ZodAny;
    label: z.ZodString;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}, {
    id: number;
    value: number;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    calendly_link: string;
    job_title: string;
    job_history: string[];
    job_roles: any[];
    industries: {
        name: string;
        created_at: string;
        updated_at: string;
    }[];
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    skills: {
        value: number;
        label: string;
        selected: boolean;
    }[];
    skills_by_category: {
        very_comfortable: {
            value: number;
            label: string;
            selected: boolean;
        }[];
    };
    summary: string;
    track?: any;
}>;
export declare const programManager2Schema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    avatar: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
    cohort_id: z.ZodAny;
    role: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    drive_id: z.ZodAny;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    track: z.ZodAny;
    summary: z.ZodAny;
    core_advisor_id: z.ZodAny;
    support_advisor_id: z.ZodAny;
    calendar_link: z.ZodString;
    airtable_rec_id: z.ZodString;
    active_status: z.ZodAny;
    opt_start_date: z.ZodAny;
    on_discourse: z.ZodBoolean;
    sfdc_contact_id: z.ZodString;
    sfdc_opportunity_id: z.ZodAny;
    fellow_agreement_status: z.ZodAny;
    isa_status: z.ZodAny;
    about: z.ZodAny;
    attendance_overrides: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    phone: z.ZodAny;
    fellow_agreement_deadline: z.ZodAny;
    work_authorization: z.ZodAny;
    last_visited: z.ZodString;
    linkedin: z.ZodAny;
    portfolio: z.ZodAny;
    disabled: z.ZodBoolean;
    skills_growth_plan: z.ZodString;
    gcalendar_id: z.ZodString;
    location: z.ZodAny;
    accelerated_date: z.ZodAny;
    break_start_date: z.ZodAny;
    break_end_date: z.ZodAny;
    payment_type: z.ZodAny;
    trial_end_date: z.ZodAny;
    withdrawal_request_date: z.ZodAny;
    pathrise_end_date: z.ZodAny;
    secondary_track: z.ZodAny;
    test_user: z.ZodBoolean;
    sfdc_advisor_owner: z.ZodAny;
    addendums: z.ZodArray<z.ZodAny, "many">;
    discourse_id: z.ZodAny;
    discourse_last_seen_at: z.ZodAny;
    intercom_id: z.ZodString;
    opportunity_type: z.ZodAny;
    program_manager_id: z.ZodAny;
    pronouns: z.ZodAny;
    sfdc_scorecard_notes: z.ZodAny;
    employee_manager_id: z.ZodNumber;
    job_title: z.ZodAny;
    job_history: z.ZodArray<z.ZodAny, "many">;
    enrollment_strategy: z.ZodAny;
    anticipated_pathrise_end_date: z.ZodAny;
    pathrise_start_date: z.ZodAny;
    nps_updated_at: z.ZodAny;
    program_duration: z.ZodAny;
    event_status: z.ZodObject<{
        fsm_call: z.ZodObject<{
            event_type: z.ZodString;
            override_count: z.ZodNumber;
            override_status: z.ZodString;
            calculated_status: z.ZodString;
            override_status_author: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        }, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        }>;
        career_kickoff: z.ZodObject<{
            event_type: z.ZodString;
            override_count: z.ZodNumber;
            scheduled_date: z.ZodString;
            override_status: z.ZodString;
            calculated_status: z.ZodString;
            override_status_author: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        }, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        }>;
        industry_kickoff: z.ZodObject<{
            event_type: z.ZodString;
            override_count: z.ZodNumber;
            scheduled_date: z.ZodString;
            override_status: z.ZodString;
            calculated_status: z.ZodString;
            override_status_author: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        }, {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        fsm_call: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        };
        career_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
        industry_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
    }, {
        fsm_call: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        };
        career_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
        industry_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
    }>;
    platform_access: z.ZodString;
    trial_owner_id: z.ZodAny;
    organization_id: z.ZodNumber;
    break_length: z.ZodAny;
    break_reason: z.ZodAny;
    health_triage: z.ZodAny;
    withdrawal_type: z.ZodAny;
    withdrawal_reason: z.ZodAny;
    withdrawal_context: z.ZodAny;
    nps: z.ZodAny;
    mia_notes: z.ZodAny;
    mia_start_date: z.ZodAny;
    payment_status: z.ZodAny;
    price_name: z.ZodAny;
    pdg_id: z.ZodAny;
    onboard_email_sent: z.ZodBoolean;
    accepted_terms: z.ZodBoolean;
    leif_link: z.ZodAny;
    viewed_offer_agreement: z.ZodBoolean;
    role_type: z.ZodAny;
    offer_flow_start_date: z.ZodAny;
    pdg_slides_id: z.ZodAny;
    leif_contract_id: z.ZodAny;
    completed_trial_survey: z.ZodAny;
    program_terms_of_service_id: z.ZodAny;
    show_program_terms_of_service: z.ZodBoolean;
    sfdc_user_id: z.ZodString;
    last_in_program_survey_completion_date: z.ZodAny;
    placed_at: z.ZodAny;
    pathrise_promoter: z.ZodAny;
    subscription_tier_id: z.ZodAny;
    employment_type: z.ZodString;
    began_career_at: z.ZodAny;
    sms_phone: z.ZodAny;
    degree_type: z.ZodAny;
    degree_school: z.ZodAny;
    degree_date: z.ZodAny;
    job_search_plan_id: z.ZodAny;
    job_search_owner_id: z.ZodAny;
    abc_rating: z.ZodAny;
    is_m2m: z.ZodBoolean;
    hedwig_id: z.ZodAny;
    copilot_last_visited: z.ZodAny;
    streak_reset_at: z.ZodAny;
    max_infraction_limit: z.ZodNumber;
    mia_end_date: z.ZodAny;
    tap_status: z.ZodAny;
    timezone: z.ZodString;
    program_phase_scope: z.ZodString;
    pte_conversion_date: z.ZodAny;
    first_career_mentor_reassignment_date: z.ZodAny;
    job_search_plan_accepted_at: z.ZodAny;
    secondary_email: z.ZodAny;
    job_search_plan_draft_id: z.ZodAny;
    app_ready_status: z.ZodString;
    humanized_tracks: z.ZodAny;
    calendly_type: z.ZodAny;
    subscription_tier: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_at: string;
    updated_at: string;
    email: string;
    disabled: boolean;
    avatar: {
        url: string;
    };
    role: string;
    first_name: string;
    last_name: string;
    job_history: any[];
    calendar_link: string;
    airtable_rec_id: string;
    on_discourse: boolean;
    sfdc_contact_id: string;
    attendance_overrides: {};
    last_visited: string;
    skills_growth_plan: string;
    gcalendar_id: string;
    test_user: boolean;
    addendums: any[];
    intercom_id: string;
    employee_manager_id: number;
    event_status: {
        fsm_call: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        };
        career_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
        industry_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
    };
    platform_access: string;
    organization_id: number;
    onboard_email_sent: boolean;
    accepted_terms: boolean;
    viewed_offer_agreement: boolean;
    show_program_terms_of_service: boolean;
    sfdc_user_id: string;
    employment_type: string;
    is_m2m: boolean;
    max_infraction_limit: number;
    timezone: string;
    program_phase_scope: string;
    app_ready_status: string;
    cohort_id?: any;
    drive_id?: any;
    track?: any;
    summary?: any;
    core_advisor_id?: any;
    support_advisor_id?: any;
    active_status?: any;
    opt_start_date?: any;
    sfdc_opportunity_id?: any;
    fellow_agreement_status?: any;
    isa_status?: any;
    about?: any;
    phone?: any;
    fellow_agreement_deadline?: any;
    work_authorization?: any;
    linkedin?: any;
    portfolio?: any;
    location?: any;
    accelerated_date?: any;
    break_start_date?: any;
    break_end_date?: any;
    payment_type?: any;
    trial_end_date?: any;
    withdrawal_request_date?: any;
    pathrise_end_date?: any;
    secondary_track?: any;
    sfdc_advisor_owner?: any;
    discourse_id?: any;
    discourse_last_seen_at?: any;
    opportunity_type?: any;
    program_manager_id?: any;
    pronouns?: any;
    sfdc_scorecard_notes?: any;
    job_title?: any;
    enrollment_strategy?: any;
    anticipated_pathrise_end_date?: any;
    pathrise_start_date?: any;
    nps_updated_at?: any;
    program_duration?: any;
    trial_owner_id?: any;
    break_length?: any;
    break_reason?: any;
    health_triage?: any;
    withdrawal_type?: any;
    withdrawal_reason?: any;
    withdrawal_context?: any;
    nps?: any;
    mia_notes?: any;
    mia_start_date?: any;
    payment_status?: any;
    price_name?: any;
    pdg_id?: any;
    leif_link?: any;
    role_type?: any;
    offer_flow_start_date?: any;
    pdg_slides_id?: any;
    leif_contract_id?: any;
    completed_trial_survey?: any;
    program_terms_of_service_id?: any;
    last_in_program_survey_completion_date?: any;
    placed_at?: any;
    pathrise_promoter?: any;
    subscription_tier_id?: any;
    began_career_at?: any;
    sms_phone?: any;
    degree_type?: any;
    degree_school?: any;
    degree_date?: any;
    job_search_plan_id?: any;
    job_search_owner_id?: any;
    abc_rating?: any;
    hedwig_id?: any;
    copilot_last_visited?: any;
    streak_reset_at?: any;
    mia_end_date?: any;
    tap_status?: any;
    pte_conversion_date?: any;
    first_career_mentor_reassignment_date?: any;
    job_search_plan_accepted_at?: any;
    secondary_email?: any;
    job_search_plan_draft_id?: any;
    humanized_tracks?: any;
    calendly_type?: any;
    subscription_tier?: any;
}, {
    id: number;
    created_at: string;
    updated_at: string;
    email: string;
    disabled: boolean;
    avatar: {
        url: string;
    };
    role: string;
    first_name: string;
    last_name: string;
    job_history: any[];
    calendar_link: string;
    airtable_rec_id: string;
    on_discourse: boolean;
    sfdc_contact_id: string;
    attendance_overrides: {};
    last_visited: string;
    skills_growth_plan: string;
    gcalendar_id: string;
    test_user: boolean;
    addendums: any[];
    intercom_id: string;
    employee_manager_id: number;
    event_status: {
        fsm_call: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
        };
        career_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
        industry_kickoff: {
            event_type: string;
            override_count: number;
            override_status: string;
            calculated_status: string;
            override_status_author: string;
            scheduled_date: string;
        };
    };
    platform_access: string;
    organization_id: number;
    onboard_email_sent: boolean;
    accepted_terms: boolean;
    viewed_offer_agreement: boolean;
    show_program_terms_of_service: boolean;
    sfdc_user_id: string;
    employment_type: string;
    is_m2m: boolean;
    max_infraction_limit: number;
    timezone: string;
    program_phase_scope: string;
    app_ready_status: string;
    cohort_id?: any;
    drive_id?: any;
    track?: any;
    summary?: any;
    core_advisor_id?: any;
    support_advisor_id?: any;
    active_status?: any;
    opt_start_date?: any;
    sfdc_opportunity_id?: any;
    fellow_agreement_status?: any;
    isa_status?: any;
    about?: any;
    phone?: any;
    fellow_agreement_deadline?: any;
    work_authorization?: any;
    linkedin?: any;
    portfolio?: any;
    location?: any;
    accelerated_date?: any;
    break_start_date?: any;
    break_end_date?: any;
    payment_type?: any;
    trial_end_date?: any;
    withdrawal_request_date?: any;
    pathrise_end_date?: any;
    secondary_track?: any;
    sfdc_advisor_owner?: any;
    discourse_id?: any;
    discourse_last_seen_at?: any;
    opportunity_type?: any;
    program_manager_id?: any;
    pronouns?: any;
    sfdc_scorecard_notes?: any;
    job_title?: any;
    enrollment_strategy?: any;
    anticipated_pathrise_end_date?: any;
    pathrise_start_date?: any;
    nps_updated_at?: any;
    program_duration?: any;
    trial_owner_id?: any;
    break_length?: any;
    break_reason?: any;
    health_triage?: any;
    withdrawal_type?: any;
    withdrawal_reason?: any;
    withdrawal_context?: any;
    nps?: any;
    mia_notes?: any;
    mia_start_date?: any;
    payment_status?: any;
    price_name?: any;
    pdg_id?: any;
    leif_link?: any;
    role_type?: any;
    offer_flow_start_date?: any;
    pdg_slides_id?: any;
    leif_contract_id?: any;
    completed_trial_survey?: any;
    program_terms_of_service_id?: any;
    last_in_program_survey_completion_date?: any;
    placed_at?: any;
    pathrise_promoter?: any;
    subscription_tier_id?: any;
    began_career_at?: any;
    sms_phone?: any;
    degree_type?: any;
    degree_school?: any;
    degree_date?: any;
    job_search_plan_id?: any;
    job_search_owner_id?: any;
    abc_rating?: any;
    hedwig_id?: any;
    copilot_last_visited?: any;
    streak_reset_at?: any;
    mia_end_date?: any;
    tap_status?: any;
    pte_conversion_date?: any;
    first_career_mentor_reassignment_date?: any;
    job_search_plan_accepted_at?: any;
    secondary_email?: any;
    job_search_plan_draft_id?: any;
    humanized_tracks?: any;
    calendly_type?: any;
    subscription_tier?: any;
}>;
export declare const fellowSchema: z.ZodObject<{
    id: z.ZodNumber;
    about: z.ZodAny;
    accelerated_date: z.ZodAny;
    active_status: z.ZodString;
    addendums: z.ZodArray<z.ZodAny, "many">;
    app_ready_status: z.ZodString;
    agreement_status: z.ZodString;
    anticipated_pathrise_end_date: z.ZodString;
    credit_check: z.ZodObject<{
        result: z.ZodObject<{
            status: z.ZodBoolean;
            edly_reason: z.ZodArray<z.ZodAny, "many">;
            edly_result: z.ZodBoolean;
            leif_reason: z.ZodArray<z.ZodAny, "many">;
            leif_result: z.ZodBoolean;
            climb_reason: z.ZodArray<z.ZodAny, "many">;
            climb_result: z.ZodBoolean;
            stride_reason: z.ZodArray<z.ZodAny, "many">;
            stride_result: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        }, {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        }>;
        financing_options: z.ZodArray<z.ZodString, "many">;
        ssn_provided: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        result: {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        };
        financing_options: string[];
        ssn_provided: boolean;
    }, {
        result: {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        };
        financing_options: string[];
        ssn_provided: boolean;
    }>;
    pte_flow: z.ZodObject<{
        completed_at: z.ZodString;
        financing: z.ZodString;
        plan: z.ZodString;
        pricing: z.ZodString;
        financing_application_completed_date: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        completed_at: string;
        financing: string;
        plan: string;
        pricing: string;
        financing_application_completed_date: string;
    }, {
        completed_at: string;
        financing: string;
        plan: string;
        pricing: string;
        financing_application_completed_date: string;
    }>;
    job_search_plan_accepted_at: z.ZodAny;
    show_program_terms_of_service: z.ZodBoolean;
    analytics_type: z.ZodString;
    avatar: z.ZodString;
    can_schedule_session_one: z.ZodBoolean;
    cohort: z.ZodString;
    show_extension_update_banner: z.ZodBoolean;
    show_onboarding_quiz: z.ZodBoolean;
    cohort_start_date: z.ZodString;
    cohort_drive_id: z.ZodString;
    created_at: z.ZodString;
    completed_session_one: z.ZodBoolean;
    completed_trial_survey: z.ZodString;
    career_mentor: z.ZodObject<{
        id: z.ZodNumber;
        avatar: z.ZodString;
        calendly_link: z.ZodString;
        email: z.ZodString;
        linkedin: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        full_name: z.ZodString;
        job_title: z.ZodString;
        job_history: z.ZodArray<z.ZodString, "many">;
        job_roles: z.ZodArray<z.ZodAny, "many">;
        industries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            created_at: string;
            updated_at: string;
        }, {
            name: string;
            created_at: string;
            updated_at: string;
        }>, "many">;
        organization: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            trial_type: z.ZodString;
            api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }>;
        role: z.ZodString;
        skills: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
        skills_by_category: z.ZodObject<{
            very_comfortable: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodNumber;
                selected: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                value: number;
                label: string;
                selected: boolean;
            }, {
                value: number;
                label: string;
                selected: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }>;
        summary: z.ZodString;
        track: z.ZodAny;
        label: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }>;
    core_advisor: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
        email: z.ZodString;
        disabled: z.ZodBoolean;
        avatar: z.ZodString;
        linkedin: z.ZodString;
        about: z.ZodAny;
        role: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }>;
    daily_streak: z.ZodNumber;
    has_completed_onboarding_steps: z.ZodBoolean;
    max_infraction_limit: z.ZodNumber;
    can_receive_infractions: z.ZodBoolean;
    support_advisor: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
        email: z.ZodString;
        disabled: z.ZodBoolean;
        avatar: z.ZodString;
        linkedin: z.ZodString;
        about: z.ZodAny;
        role: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }>;
    job_search_owner: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
        email: z.ZodString;
        disabled: z.ZodBoolean;
        avatar: z.ZodString;
        linkedin: z.ZodString;
        about: z.ZodAny;
        role: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    }>;
    drive_url: z.ZodString;
    job_search_plan_doc_url: z.ZodAny;
    job_search_plan_draft_url: z.ZodString;
    drive_id: z.ZodString;
    program_terms_and_conditions_url: z.ZodString;
    email: z.ZodString;
    enrollment_strategy: z.ZodString;
    engagement_survey_id: z.ZodNumber;
    first_name: z.ZodString;
    last_name: z.ZodString;
    final_trial_end_date: z.ZodString;
    full_name: z.ZodString;
    has_converted: z.ZodBoolean;
    has_not_received_infraction_today: z.ZodBoolean;
    in_free_trial: z.ZodBoolean;
    in_program_isa_overdue: z.ZodBoolean;
    in_syllabus_beta: z.ZodBoolean;
    in_soft_credit_check_beta: z.ZodBoolean;
    isa_status: z.ZodString;
    leif_link: z.ZodAny;
    last_visited: z.ZodString;
    linkedin: z.ZodString;
    location: z.ZodAny;
    show_in_program_survey_banner: z.ZodBoolean;
    offer_flow_active: z.ZodAny;
    opportunity_type: z.ZodString;
    opt_start_date: z.ZodAny;
    org_api_name: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        trial_type: z.ZodString;
        api_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }, {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    }>;
    payment_type: z.ZodString;
    pathrise_start_date: z.ZodString;
    pdg_id: z.ZodAny;
    phone: z.ZodString;
    portfolio: z.ZodAny;
    price_name: z.ZodString;
    subscription_tier: z.ZodObject<{
        slug: z.ZodString;
        type: z.ZodString;
        limit_credits: z.ZodBoolean;
        max_credits: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        slug: string;
        limit_credits: boolean;
        max_credits: number;
    }, {
        type: string;
        slug: string;
        limit_credits: boolean;
        max_credits: number;
    }>;
    remaining_credits: z.ZodNumber;
    pending_credits: z.ZodNumber;
    program_manager: z.ZodObject<{
        full_name: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        full_name?: any;
    }, {
        full_name?: any;
    }>;
    pronouns: z.ZodAny;
    scheduled_session_one: z.ZodBoolean;
    scheduled_session_two: z.ZodBoolean;
    secondary_track: z.ZodAny;
    settings: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        active: z.ZodBoolean;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        active: boolean;
    }, {
        id: number;
        name: string;
        active: boolean;
    }>, "many">;
    job_preferences: z.ZodArray<z.ZodAny, "many">;
    role: z.ZodString;
    sfdc_opportunity_id: z.ZodString;
    sfdc_scorecard_notes: z.ZodString;
    show_chat_engagement_survey: z.ZodBoolean;
    show_trial_survey: z.ZodBoolean;
    skills_growth_plan: z.ZodString;
    skills_rating: z.ZodAny;
    summary: z.ZodAny;
    survey_default_params: z.ZodObject<{
        user_id: z.ZodNumber;
        fellow_email: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        track: z.ZodString;
        cohort: z.ZodString;
        mentor_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        user_id: number;
        fellow_email: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        mentor_name: string;
    }, {
        user_id: number;
        fellow_email: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        mentor_name: string;
    }>;
    tap_status: z.ZodAny;
    test_user: z.ZodBoolean;
    timezone: z.ZodString;
    pte_flow_started_at: z.ZodString;
    track: z.ZodString;
    challenge: z.ZodString;
    trial_end_date: z.ZodString;
    trial_owner: z.ZodObject<{
        id: z.ZodNumber;
        full_name: z.ZodString;
        email: z.ZodString;
        disabled: z.ZodBoolean;
        avatar: z.ZodString;
        main_mentor: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        main_mentor: boolean;
    }, {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        main_mentor: boolean;
    }>;
    viewed_offer_agreement: z.ZodBoolean;
    work_authorization: z.ZodString;
    workshops_required: z.ZodBoolean;
    label: z.ZodString;
    value: z.ZodNumber;
    abc_rating: z.ZodAny;
    qualified_placement_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    value: number;
    created_at: string;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    track: string;
    cohort: string;
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    drive_id: string;
    active_status: string;
    sfdc_opportunity_id: string;
    isa_status: string;
    phone: string;
    work_authorization: string;
    last_visited: string;
    skills_growth_plan: string;
    payment_type: string;
    trial_end_date: string;
    test_user: boolean;
    addendums: any[];
    opportunity_type: string;
    sfdc_scorecard_notes: string;
    enrollment_strategy: string;
    anticipated_pathrise_end_date: string;
    pathrise_start_date: string;
    price_name: string;
    viewed_offer_agreement: boolean;
    completed_trial_survey: string;
    show_program_terms_of_service: boolean;
    max_infraction_limit: number;
    timezone: string;
    app_ready_status: string;
    subscription_tier: {
        type: string;
        slug: string;
        limit_credits: boolean;
        max_credits: number;
    };
    agreement_status: string;
    credit_check: {
        result: {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        };
        financing_options: string[];
        ssn_provided: boolean;
    };
    pte_flow: {
        completed_at: string;
        financing: string;
        plan: string;
        pricing: string;
        financing_application_completed_date: string;
    };
    analytics_type: string;
    can_schedule_session_one: boolean;
    show_extension_update_banner: boolean;
    show_onboarding_quiz: boolean;
    cohort_start_date: string;
    cohort_drive_id: string;
    completed_session_one: boolean;
    career_mentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    core_advisor: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    daily_streak: number;
    has_completed_onboarding_steps: boolean;
    can_receive_infractions: boolean;
    support_advisor: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    job_search_owner: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    drive_url: string;
    job_search_plan_draft_url: string;
    program_terms_and_conditions_url: string;
    engagement_survey_id: number;
    final_trial_end_date: string;
    has_converted: boolean;
    has_not_received_infraction_today: boolean;
    in_free_trial: boolean;
    in_program_isa_overdue: boolean;
    in_syllabus_beta: boolean;
    in_soft_credit_check_beta: boolean;
    show_in_program_survey_banner: boolean;
    org_api_name: string;
    remaining_credits: number;
    pending_credits: number;
    program_manager: {
        full_name?: any;
    };
    scheduled_session_one: boolean;
    scheduled_session_two: boolean;
    settings: {
        id: number;
        name: string;
        active: boolean;
    }[];
    job_preferences: any[];
    show_chat_engagement_survey: boolean;
    show_trial_survey: boolean;
    survey_default_params: {
        user_id: number;
        fellow_email: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        mentor_name: string;
    };
    pte_flow_started_at: string;
    challenge: string;
    trial_owner: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        main_mentor: boolean;
    };
    workshops_required: boolean;
    qualified_placement_count: number;
    about?: any;
    accelerated_date?: any;
    job_search_plan_accepted_at?: any;
    job_search_plan_doc_url?: any;
    leif_link?: any;
    location?: any;
    offer_flow_active?: any;
    opt_start_date?: any;
    pdg_id?: any;
    portfolio?: any;
    pronouns?: any;
    secondary_track?: any;
    skills_rating?: any;
    summary?: any;
    tap_status?: any;
    abc_rating?: any;
}, {
    id: number;
    value: number;
    created_at: string;
    full_name: string;
    label: string;
    email: string;
    avatar: string;
    linkedin: string;
    role: string;
    first_name: string;
    last_name: string;
    track: string;
    cohort: string;
    organization: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        trial_type: string;
        api_name: string;
    };
    drive_id: string;
    active_status: string;
    sfdc_opportunity_id: string;
    isa_status: string;
    phone: string;
    work_authorization: string;
    last_visited: string;
    skills_growth_plan: string;
    payment_type: string;
    trial_end_date: string;
    test_user: boolean;
    addendums: any[];
    opportunity_type: string;
    sfdc_scorecard_notes: string;
    enrollment_strategy: string;
    anticipated_pathrise_end_date: string;
    pathrise_start_date: string;
    price_name: string;
    viewed_offer_agreement: boolean;
    completed_trial_survey: string;
    show_program_terms_of_service: boolean;
    max_infraction_limit: number;
    timezone: string;
    app_ready_status: string;
    subscription_tier: {
        type: string;
        slug: string;
        limit_credits: boolean;
        max_credits: number;
    };
    agreement_status: string;
    credit_check: {
        result: {
            status: boolean;
            edly_reason: any[];
            edly_result: boolean;
            leif_reason: any[];
            leif_result: boolean;
            climb_reason: any[];
            climb_result: boolean;
            stride_reason: any[];
            stride_result: boolean;
        };
        financing_options: string[];
        ssn_provided: boolean;
    };
    pte_flow: {
        completed_at: string;
        financing: string;
        plan: string;
        pricing: string;
        financing_application_completed_date: string;
    };
    analytics_type: string;
    can_schedule_session_one: boolean;
    show_extension_update_banner: boolean;
    show_onboarding_quiz: boolean;
    cohort_start_date: string;
    cohort_drive_id: string;
    completed_session_one: boolean;
    career_mentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    core_advisor: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    daily_streak: number;
    has_completed_onboarding_steps: boolean;
    can_receive_infractions: boolean;
    support_advisor: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    job_search_owner: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        linkedin: string;
        role: string;
        about?: any;
    };
    drive_url: string;
    job_search_plan_draft_url: string;
    program_terms_and_conditions_url: string;
    engagement_survey_id: number;
    final_trial_end_date: string;
    has_converted: boolean;
    has_not_received_infraction_today: boolean;
    in_free_trial: boolean;
    in_program_isa_overdue: boolean;
    in_syllabus_beta: boolean;
    in_soft_credit_check_beta: boolean;
    show_in_program_survey_banner: boolean;
    org_api_name: string;
    remaining_credits: number;
    pending_credits: number;
    program_manager: {
        full_name?: any;
    };
    scheduled_session_one: boolean;
    scheduled_session_two: boolean;
    settings: {
        id: number;
        name: string;
        active: boolean;
    }[];
    job_preferences: any[];
    show_chat_engagement_survey: boolean;
    show_trial_survey: boolean;
    survey_default_params: {
        user_id: number;
        fellow_email: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        mentor_name: string;
    };
    pte_flow_started_at: string;
    challenge: string;
    trial_owner: {
        id: number;
        full_name: string;
        email: string;
        disabled: boolean;
        avatar: string;
        main_mentor: boolean;
    };
    workshops_required: boolean;
    qualified_placement_count: number;
    about?: any;
    accelerated_date?: any;
    job_search_plan_accepted_at?: any;
    job_search_plan_doc_url?: any;
    leif_link?: any;
    location?: any;
    offer_flow_active?: any;
    opt_start_date?: any;
    pdg_id?: any;
    portfolio?: any;
    pronouns?: any;
    secondary_track?: any;
    skills_rating?: any;
    summary?: any;
    tap_status?: any;
    abc_rating?: any;
}>;
export declare const rootSchema: z.ZodObject<{
    appProcesses: z.ZodArray<z.ZodObject<{
        archived_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        company_name: z.ZodString;
        created_at: z.ZodString;
        id: z.ZodNumber;
        interest: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        is_remote: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        job_application_context: z.ZodString;
        job_board: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            root_domain: z.ZodString;
            domains: z.ZodArray<z.ZodString, "many">;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        }, {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        }>>>;
        job_rec_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        job_title: z.ZodString;
        job_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pipeline_connections: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            channel: z.ZodString;
            user: z.ZodObject<{
                id: z.ZodNumber;
                full_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                full_name: string;
            }, {
                id: number;
                full_name: string;
            }>;
            contact: z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                contact_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                contact_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                linkedin_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                contact_role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            }, {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            }>;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            outreach_date: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }, {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }>, "many">;
        result: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            outcome: z.ZodString;
            date: z.ZodString;
            notes: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        }, {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        }>>>;
        sourced_job: z.ZodAny;
        stages: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            date: z.ZodString;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            round: z.ZodNumber;
            created_at: z.ZodString;
            interview_type: z.ZodString;
            company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            is_interview: z.ZodBoolean;
            questions: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                title: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                title: string;
            }, {
                id: number;
                title: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }, {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }>, "many">;
        status: z.ZodString;
        strategies: z.ZodArray<z.ZodAny, "many">;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
        job_title: string;
        company: {
            id: number;
        };
        company_name: string;
        job_application_context: string;
        pipeline_connections: {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }[];
        stages: {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }[];
        strategies: any[];
        archived_at?: string | null | undefined;
        interest?: number | null | undefined;
        is_remote?: boolean | null | undefined;
        job_board?: {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        } | null | undefined;
        job_rec_id?: number | null | undefined;
        job_url?: string | null | undefined;
        notes?: string | null | undefined;
        result?: {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        } | null | undefined;
        sourced_job?: any;
    }, {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
        job_title: string;
        company: {
            id: number;
        };
        company_name: string;
        job_application_context: string;
        pipeline_connections: {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }[];
        stages: {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }[];
        strategies: any[];
        archived_at?: string | null | undefined;
        interest?: number | null | undefined;
        is_remote?: boolean | null | undefined;
        job_board?: {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        } | null | undefined;
        job_rec_id?: number | null | undefined;
        job_url?: string | null | undefined;
        notes?: string | null | undefined;
        result?: {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        } | null | undefined;
        sourced_job?: any;
    }>, "many">;
    careerMentor: z.ZodObject<{
        id: z.ZodNumber;
        avatar: z.ZodString;
        calendly_link: z.ZodString;
        email: z.ZodString;
        linkedin: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        full_name: z.ZodString;
        job_title: z.ZodString;
        job_history: z.ZodArray<z.ZodString, "many">;
        job_roles: z.ZodArray<z.ZodAny, "many">;
        industries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            created_at: string;
            updated_at: string;
        }, {
            name: string;
            created_at: string;
            updated_at: string;
        }>, "many">;
        organization: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            trial_type: z.ZodString;
            api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }>;
        role: z.ZodString;
        skills: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
        skills_by_category: z.ZodObject<{
            very_comfortable: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodNumber;
                selected: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                value: number;
                label: string;
                selected: boolean;
            }, {
                value: number;
                label: string;
                selected: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }>;
        summary: z.ZodString;
        track: z.ZodAny;
        label: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }>;
    fellow: z.ZodObject<{
        id: z.ZodNumber;
        about: z.ZodAny;
        accelerated_date: z.ZodAny;
        active_status: z.ZodString;
        addendums: z.ZodArray<z.ZodAny, "many">;
        app_ready_status: z.ZodString;
        agreement_status: z.ZodString;
        anticipated_pathrise_end_date: z.ZodString;
        credit_check: z.ZodObject<{
            result: z.ZodObject<{
                status: z.ZodBoolean;
                edly_reason: z.ZodArray<z.ZodAny, "many">;
                edly_result: z.ZodBoolean;
                leif_reason: z.ZodArray<z.ZodAny, "many">;
                leif_result: z.ZodBoolean;
                climb_reason: z.ZodArray<z.ZodAny, "many">;
                climb_result: z.ZodBoolean;
                stride_reason: z.ZodArray<z.ZodAny, "many">;
                stride_result: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            }, {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            }>;
            financing_options: z.ZodArray<z.ZodString, "many">;
            ssn_provided: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        }, {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        }>;
        pte_flow: z.ZodObject<{
            completed_at: z.ZodString;
            financing: z.ZodString;
            plan: z.ZodString;
            pricing: z.ZodString;
            financing_application_completed_date: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        }, {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        }>;
        job_search_plan_accepted_at: z.ZodAny;
        show_program_terms_of_service: z.ZodBoolean;
        analytics_type: z.ZodString;
        avatar: z.ZodString;
        can_schedule_session_one: z.ZodBoolean;
        cohort: z.ZodString;
        show_extension_update_banner: z.ZodBoolean;
        show_onboarding_quiz: z.ZodBoolean;
        cohort_start_date: z.ZodString;
        cohort_drive_id: z.ZodString;
        created_at: z.ZodString;
        completed_session_one: z.ZodBoolean;
        completed_trial_survey: z.ZodString;
        career_mentor: z.ZodObject<{
            id: z.ZodNumber;
            avatar: z.ZodString;
            calendly_link: z.ZodString;
            email: z.ZodString;
            linkedin: z.ZodString;
            first_name: z.ZodString;
            last_name: z.ZodString;
            full_name: z.ZodString;
            job_title: z.ZodString;
            job_history: z.ZodArray<z.ZodString, "many">;
            job_roles: z.ZodArray<z.ZodAny, "many">;
            industries: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                created_at: z.ZodString;
                updated_at: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                created_at: string;
                updated_at: string;
            }, {
                name: string;
                created_at: string;
                updated_at: string;
            }>, "many">;
            organization: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                created_at: z.ZodString;
                updated_at: z.ZodString;
                trial_type: z.ZodString;
                api_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            }, {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            }>;
            role: z.ZodString;
            skills: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodNumber;
                selected: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                value: number;
                label: string;
                selected: boolean;
            }, {
                value: number;
                label: string;
                selected: boolean;
            }>, "many">;
            skills_by_category: z.ZodObject<{
                very_comfortable: z.ZodArray<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodNumber;
                    selected: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    label: string;
                    selected: boolean;
                }, {
                    value: number;
                    label: string;
                    selected: boolean;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            }, {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            }>;
            summary: z.ZodString;
            track: z.ZodAny;
            label: z.ZodString;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        }, {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        }>;
        core_advisor: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
            email: z.ZodString;
            disabled: z.ZodBoolean;
            avatar: z.ZodString;
            linkedin: z.ZodString;
            about: z.ZodAny;
            role: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }>;
        daily_streak: z.ZodNumber;
        has_completed_onboarding_steps: z.ZodBoolean;
        max_infraction_limit: z.ZodNumber;
        can_receive_infractions: z.ZodBoolean;
        support_advisor: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
            email: z.ZodString;
            disabled: z.ZodBoolean;
            avatar: z.ZodString;
            linkedin: z.ZodString;
            about: z.ZodAny;
            role: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }>;
        job_search_owner: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
            email: z.ZodString;
            disabled: z.ZodBoolean;
            avatar: z.ZodString;
            linkedin: z.ZodString;
            about: z.ZodAny;
            role: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        }>;
        drive_url: z.ZodString;
        job_search_plan_doc_url: z.ZodAny;
        job_search_plan_draft_url: z.ZodString;
        drive_id: z.ZodString;
        program_terms_and_conditions_url: z.ZodString;
        email: z.ZodString;
        enrollment_strategy: z.ZodString;
        engagement_survey_id: z.ZodNumber;
        first_name: z.ZodString;
        last_name: z.ZodString;
        final_trial_end_date: z.ZodString;
        full_name: z.ZodString;
        has_converted: z.ZodBoolean;
        has_not_received_infraction_today: z.ZodBoolean;
        in_free_trial: z.ZodBoolean;
        in_program_isa_overdue: z.ZodBoolean;
        in_syllabus_beta: z.ZodBoolean;
        in_soft_credit_check_beta: z.ZodBoolean;
        isa_status: z.ZodString;
        leif_link: z.ZodAny;
        last_visited: z.ZodString;
        linkedin: z.ZodString;
        location: z.ZodAny;
        show_in_program_survey_banner: z.ZodBoolean;
        offer_flow_active: z.ZodAny;
        opportunity_type: z.ZodString;
        opt_start_date: z.ZodAny;
        org_api_name: z.ZodString;
        organization: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            trial_type: z.ZodString;
            api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }>;
        payment_type: z.ZodString;
        pathrise_start_date: z.ZodString;
        pdg_id: z.ZodAny;
        phone: z.ZodString;
        portfolio: z.ZodAny;
        price_name: z.ZodString;
        subscription_tier: z.ZodObject<{
            slug: z.ZodString;
            type: z.ZodString;
            limit_credits: z.ZodBoolean;
            max_credits: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        }, {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        }>;
        remaining_credits: z.ZodNumber;
        pending_credits: z.ZodNumber;
        program_manager: z.ZodObject<{
            full_name: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            full_name?: any;
        }, {
            full_name?: any;
        }>;
        pronouns: z.ZodAny;
        scheduled_session_one: z.ZodBoolean;
        scheduled_session_two: z.ZodBoolean;
        secondary_track: z.ZodAny;
        settings: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            active: z.ZodBoolean;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            active: boolean;
        }, {
            id: number;
            name: string;
            active: boolean;
        }>, "many">;
        job_preferences: z.ZodArray<z.ZodAny, "many">;
        role: z.ZodString;
        sfdc_opportunity_id: z.ZodString;
        sfdc_scorecard_notes: z.ZodString;
        show_chat_engagement_survey: z.ZodBoolean;
        show_trial_survey: z.ZodBoolean;
        skills_growth_plan: z.ZodString;
        skills_rating: z.ZodAny;
        summary: z.ZodAny;
        survey_default_params: z.ZodObject<{
            user_id: z.ZodNumber;
            fellow_email: z.ZodString;
            first_name: z.ZodString;
            last_name: z.ZodString;
            track: z.ZodString;
            cohort: z.ZodString;
            mentor_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        }, {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        }>;
        tap_status: z.ZodAny;
        test_user: z.ZodBoolean;
        timezone: z.ZodString;
        pte_flow_started_at: z.ZodString;
        track: z.ZodString;
        challenge: z.ZodString;
        trial_end_date: z.ZodString;
        trial_owner: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
            email: z.ZodString;
            disabled: z.ZodBoolean;
            avatar: z.ZodString;
            main_mentor: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        }, {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        }>;
        viewed_offer_agreement: z.ZodBoolean;
        work_authorization: z.ZodString;
        workshops_required: z.ZodBoolean;
        label: z.ZodString;
        value: z.ZodNumber;
        abc_rating: z.ZodAny;
        qualified_placement_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value: number;
        created_at: string;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        drive_id: string;
        active_status: string;
        sfdc_opportunity_id: string;
        isa_status: string;
        phone: string;
        work_authorization: string;
        last_visited: string;
        skills_growth_plan: string;
        payment_type: string;
        trial_end_date: string;
        test_user: boolean;
        addendums: any[];
        opportunity_type: string;
        sfdc_scorecard_notes: string;
        enrollment_strategy: string;
        anticipated_pathrise_end_date: string;
        pathrise_start_date: string;
        price_name: string;
        viewed_offer_agreement: boolean;
        completed_trial_survey: string;
        show_program_terms_of_service: boolean;
        max_infraction_limit: number;
        timezone: string;
        app_ready_status: string;
        subscription_tier: {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        };
        agreement_status: string;
        credit_check: {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        };
        pte_flow: {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        };
        analytics_type: string;
        can_schedule_session_one: boolean;
        show_extension_update_banner: boolean;
        show_onboarding_quiz: boolean;
        cohort_start_date: string;
        cohort_drive_id: string;
        completed_session_one: boolean;
        career_mentor: {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        };
        core_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        daily_streak: number;
        has_completed_onboarding_steps: boolean;
        can_receive_infractions: boolean;
        support_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        job_search_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        drive_url: string;
        job_search_plan_draft_url: string;
        program_terms_and_conditions_url: string;
        engagement_survey_id: number;
        final_trial_end_date: string;
        has_converted: boolean;
        has_not_received_infraction_today: boolean;
        in_free_trial: boolean;
        in_program_isa_overdue: boolean;
        in_syllabus_beta: boolean;
        in_soft_credit_check_beta: boolean;
        show_in_program_survey_banner: boolean;
        org_api_name: string;
        remaining_credits: number;
        pending_credits: number;
        program_manager: {
            full_name?: any;
        };
        scheduled_session_one: boolean;
        scheduled_session_two: boolean;
        settings: {
            id: number;
            name: string;
            active: boolean;
        }[];
        job_preferences: any[];
        show_chat_engagement_survey: boolean;
        show_trial_survey: boolean;
        survey_default_params: {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        };
        pte_flow_started_at: string;
        challenge: string;
        trial_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        };
        workshops_required: boolean;
        qualified_placement_count: number;
        about?: any;
        accelerated_date?: any;
        job_search_plan_accepted_at?: any;
        job_search_plan_doc_url?: any;
        leif_link?: any;
        location?: any;
        offer_flow_active?: any;
        opt_start_date?: any;
        pdg_id?: any;
        portfolio?: any;
        pronouns?: any;
        secondary_track?: any;
        skills_rating?: any;
        summary?: any;
        tap_status?: any;
        abc_rating?: any;
    }, {
        id: number;
        value: number;
        created_at: string;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        drive_id: string;
        active_status: string;
        sfdc_opportunity_id: string;
        isa_status: string;
        phone: string;
        work_authorization: string;
        last_visited: string;
        skills_growth_plan: string;
        payment_type: string;
        trial_end_date: string;
        test_user: boolean;
        addendums: any[];
        opportunity_type: string;
        sfdc_scorecard_notes: string;
        enrollment_strategy: string;
        anticipated_pathrise_end_date: string;
        pathrise_start_date: string;
        price_name: string;
        viewed_offer_agreement: boolean;
        completed_trial_survey: string;
        show_program_terms_of_service: boolean;
        max_infraction_limit: number;
        timezone: string;
        app_ready_status: string;
        subscription_tier: {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        };
        agreement_status: string;
        credit_check: {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        };
        pte_flow: {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        };
        analytics_type: string;
        can_schedule_session_one: boolean;
        show_extension_update_banner: boolean;
        show_onboarding_quiz: boolean;
        cohort_start_date: string;
        cohort_drive_id: string;
        completed_session_one: boolean;
        career_mentor: {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        };
        core_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        daily_streak: number;
        has_completed_onboarding_steps: boolean;
        can_receive_infractions: boolean;
        support_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        job_search_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        drive_url: string;
        job_search_plan_draft_url: string;
        program_terms_and_conditions_url: string;
        engagement_survey_id: number;
        final_trial_end_date: string;
        has_converted: boolean;
        has_not_received_infraction_today: boolean;
        in_free_trial: boolean;
        in_program_isa_overdue: boolean;
        in_syllabus_beta: boolean;
        in_soft_credit_check_beta: boolean;
        show_in_program_survey_banner: boolean;
        org_api_name: string;
        remaining_credits: number;
        pending_credits: number;
        program_manager: {
            full_name?: any;
        };
        scheduled_session_one: boolean;
        scheduled_session_two: boolean;
        settings: {
            id: number;
            name: string;
            active: boolean;
        }[];
        job_preferences: any[];
        show_chat_engagement_survey: boolean;
        show_trial_survey: boolean;
        survey_default_params: {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        };
        pte_flow_started_at: string;
        challenge: string;
        trial_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        };
        workshops_required: boolean;
        qualified_placement_count: number;
        about?: any;
        accelerated_date?: any;
        job_search_plan_accepted_at?: any;
        job_search_plan_doc_url?: any;
        leif_link?: any;
        location?: any;
        offer_flow_active?: any;
        opt_start_date?: any;
        pdg_id?: any;
        portfolio?: any;
        pronouns?: any;
        secondary_track?: any;
        skills_rating?: any;
        summary?: any;
        tap_status?: any;
        abc_rating?: any;
    }>;
    fellowNotes: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        body: z.ZodString;
        mixed_private_body: z.ZodString;
        mixed: z.ZodBoolean;
        created_at: z.ZodString;
        fellow: z.ZodObject<{
            id: z.ZodNumber;
            full_name: z.ZodString;
            avatar_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            avatar_url: string;
        }, {
            id: number;
            full_name: string;
            avatar_url: string;
        }>;
        creator: z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            avatar_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            full_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        }, {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        }>;
        date: z.ZodString;
        ext_form_submission: z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        }, {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        }>;
        ext_form_submission_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ext_form_submission_completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        meeting_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tasks: z.ZodArray<z.ZodAny, "many">;
        template: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        template_is_session: z.ZodBoolean;
        was_session: z.ZodBoolean;
        updated_at: z.ZodString;
        visible_to_fellow: z.ZodBoolean;
        visible_for_all_mentors: z.ZodBoolean;
        weekly_check_in: z.ZodBoolean;
        week_two_check_in: z.ZodBoolean;
        note_modules: z.ZodArray<z.ZodString, "many">;
        is_auto_created: z.ZodBoolean;
        isPublished: z.ZodBoolean;
        rePublish: z.ZodBoolean;
        publishedStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fellow_view_count: z.ZodNumber;
        completion_status: z.ZodAny;
        embedded_attendance_reason: z.ZodString;
        embedded_fellow_reason: z.ZodAny;
        embedded_reschedule_cancellation_details: z.ZodAny;
        accountability_id: z.ZodAny;
        accountability_reason: z.ZodAny;
        canceled_accountability: z.ZodBoolean;
        infraction_count: z.ZodNumber;
        warning_count: z.ZodNumber;
        session: z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        }, {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        }>;
        accountability_record_type: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        id: number;
        date: string;
        created_at: string;
        updated_at: string;
        body: string;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
        };
        creator: {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        };
        mixed_private_body: string;
        mixed: boolean;
        ext_form_submission: {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        };
        tasks: any[];
        template_is_session: boolean;
        was_session: boolean;
        visible_to_fellow: boolean;
        visible_for_all_mentors: boolean;
        week_two_check_in: boolean;
        note_modules: string[];
        isPublished: boolean;
        rePublish: boolean;
        fellow_view_count: number;
        embedded_attendance_reason: string;
        canceled_accountability: boolean;
        infraction_count: number;
        warning_count: number;
        session: {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        };
        ext_form_submission_status?: string | null | undefined;
        ext_form_submission_completed_at?: string | null | undefined;
        meeting_id?: number | null | undefined;
        template?: string | null | undefined;
        publishedStatus?: string | null | undefined;
        completion_status?: any;
        embedded_fellow_reason?: any;
        embedded_reschedule_cancellation_details?: any;
        accountability_id?: any;
        accountability_reason?: any;
        accountability_record_type?: any;
    }, {
        id: number;
        date: string;
        created_at: string;
        updated_at: string;
        body: string;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
        };
        creator: {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        };
        mixed_private_body: string;
        mixed: boolean;
        ext_form_submission: {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        };
        tasks: any[];
        template_is_session: boolean;
        was_session: boolean;
        visible_to_fellow: boolean;
        visible_for_all_mentors: boolean;
        week_two_check_in: boolean;
        note_modules: string[];
        isPublished: boolean;
        rePublish: boolean;
        fellow_view_count: number;
        embedded_attendance_reason: string;
        canceled_accountability: boolean;
        infraction_count: number;
        warning_count: number;
        session: {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        };
        ext_form_submission_status?: string | null | undefined;
        ext_form_submission_completed_at?: string | null | undefined;
        meeting_id?: number | null | undefined;
        template?: string | null | undefined;
        publishedStatus?: string | null | undefined;
        completion_status?: any;
        embedded_fellow_reason?: any;
        embedded_reschedule_cancellation_details?: any;
        accountability_id?: any;
        accountability_reason?: any;
        accountability_record_type?: any;
    }>, "many">;
    fellowTasks: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        segment: z.ZodString;
        api_name: z.ZodAny;
        body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        completed_at: z.ZodString;
        completion_status: z.ZodString;
        created_at: z.ZodString;
        start_date: z.ZodAny;
        due_on: z.ZodString;
        onboarding: z.ZodBoolean;
        syllabus: z.ZodBoolean;
        priority_status: z.ZodString;
        hide_from_fellow: z.ZodBoolean;
        note_id: z.ZodAny;
        title: z.ZodString;
        template_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        template_api_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        weekly_check_in: z.ZodBoolean;
        is_auto_created: z.ZodBoolean;
        category: z.ZodAny;
        non_completion_reason: z.ZodAny;
        non_completion_explanation: z.ZodAny;
        data: z.ZodAny;
        resolved_at: z.ZodString;
        meeting_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        completed_by: z.ZodString;
        fellow: z.ZodObject<{
            id: z.ZodNumber;
            has_finalized_resume: z.ZodBoolean;
            avatar_url: z.ZodString;
            full_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        }, {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        }>;
        creator: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            avatar_url: z.ZodString;
            full_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            full_name: string;
            avatar_url: string;
        }, {
            id: number;
            full_name: string;
            avatar_url: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        created_at: string;
        title: string;
        completed_at: string;
        segment: string;
        completion_status: string;
        due_on: string;
        onboarding: boolean;
        syllabus: boolean;
        priority_status: string;
        hide_from_fellow: boolean;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        resolved_at: string;
        completed_by: string;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        };
        api_name?: any;
        body?: string | null | undefined;
        start_date?: any;
        note_id?: any;
        template_id?: number | null | undefined;
        template_api_name?: string | null | undefined;
        category?: any;
        non_completion_reason?: any;
        non_completion_explanation?: any;
        data?: any;
        meeting_id?: number | null | undefined;
        creator?: {
            id: number;
            full_name: string;
            avatar_url: string;
        } | null | undefined;
    }, {
        id: number;
        created_at: string;
        title: string;
        completed_at: string;
        segment: string;
        completion_status: string;
        due_on: string;
        onboarding: boolean;
        syllabus: boolean;
        priority_status: string;
        hide_from_fellow: boolean;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        resolved_at: string;
        completed_by: string;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        };
        api_name?: any;
        body?: string | null | undefined;
        start_date?: any;
        note_id?: any;
        template_id?: number | null | undefined;
        template_api_name?: string | null | undefined;
        category?: any;
        non_completion_reason?: any;
        non_completion_explanation?: any;
        data?: any;
        meeting_id?: number | null | undefined;
        creator?: {
            id: number;
            full_name: string;
            avatar_url: string;
        } | null | undefined;
    }>, "many">;
    infractionCategories: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
    industryMentor: z.ZodObject<{
        id: z.ZodNumber;
        avatar: z.ZodString;
        calendly_link: z.ZodString;
        email: z.ZodString;
        linkedin: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        full_name: z.ZodString;
        job_title: z.ZodString;
        job_history: z.ZodArray<z.ZodString, "many">;
        job_roles: z.ZodArray<z.ZodAny, "many">;
        industries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            created_at: string;
            updated_at: string;
        }, {
            name: string;
            created_at: string;
            updated_at: string;
        }>, "many">;
        organization: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            trial_type: z.ZodString;
            api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }>;
        role: z.ZodString;
        skills: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodNumber;
            selected: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: number;
            label: string;
            selected: boolean;
        }, {
            value: number;
            label: string;
            selected: boolean;
        }>, "many">;
        skills_by_category: z.ZodObject<{
            very_comfortable: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodNumber;
                selected: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                value: number;
                label: string;
                selected: boolean;
            }, {
                value: number;
                label: string;
                selected: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }, {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        }>;
        summary: z.ZodString;
        track: z.ZodAny;
        label: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    }>;
    jobBoards: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
    }, {
        value: number;
        label: string;
    }>, "many">;
    programManager: z.ZodObject<{
        id: z.ZodNumber;
        email: z.ZodString;
        avatar: z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>;
        cohort_id: z.ZodAny;
        role: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        drive_id: z.ZodAny;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        track: z.ZodAny;
        summary: z.ZodAny;
        core_advisor_id: z.ZodAny;
        support_advisor_id: z.ZodAny;
        calendar_link: z.ZodString;
        airtable_rec_id: z.ZodString;
        active_status: z.ZodAny;
        opt_start_date: z.ZodAny;
        on_discourse: z.ZodBoolean;
        sfdc_contact_id: z.ZodString;
        sfdc_opportunity_id: z.ZodAny;
        fellow_agreement_status: z.ZodAny;
        isa_status: z.ZodAny;
        about: z.ZodAny;
        attendance_overrides: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        phone: z.ZodAny;
        fellow_agreement_deadline: z.ZodAny;
        work_authorization: z.ZodAny;
        last_visited: z.ZodString;
        linkedin: z.ZodAny;
        portfolio: z.ZodAny;
        disabled: z.ZodBoolean;
        skills_growth_plan: z.ZodString;
        gcalendar_id: z.ZodString;
        location: z.ZodAny;
        accelerated_date: z.ZodAny;
        break_start_date: z.ZodAny;
        break_end_date: z.ZodAny;
        payment_type: z.ZodAny;
        trial_end_date: z.ZodAny;
        withdrawal_request_date: z.ZodAny;
        pathrise_end_date: z.ZodAny;
        secondary_track: z.ZodAny;
        test_user: z.ZodBoolean;
        sfdc_advisor_owner: z.ZodAny;
        addendums: z.ZodArray<z.ZodAny, "many">;
        discourse_id: z.ZodAny;
        discourse_last_seen_at: z.ZodAny;
        intercom_id: z.ZodString;
        opportunity_type: z.ZodAny;
        program_manager_id: z.ZodAny;
        pronouns: z.ZodAny;
        sfdc_scorecard_notes: z.ZodAny;
        employee_manager_id: z.ZodNumber;
        job_title: z.ZodAny;
        job_history: z.ZodArray<z.ZodAny, "many">;
        enrollment_strategy: z.ZodAny;
        anticipated_pathrise_end_date: z.ZodAny;
        pathrise_start_date: z.ZodAny;
        nps_updated_at: z.ZodAny;
        program_duration: z.ZodAny;
        event_status: z.ZodObject<{
            fsm_call: z.ZodObject<{
                event_type: z.ZodString;
                override_count: z.ZodNumber;
                override_status: z.ZodString;
                calculated_status: z.ZodString;
                override_status_author: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            }, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            }>;
            career_kickoff: z.ZodObject<{
                event_type: z.ZodString;
                override_count: z.ZodNumber;
                scheduled_date: z.ZodString;
                override_status: z.ZodString;
                calculated_status: z.ZodString;
                override_status_author: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            }, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            }>;
            industry_kickoff: z.ZodObject<{
                event_type: z.ZodString;
                override_count: z.ZodNumber;
                scheduled_date: z.ZodString;
                override_status: z.ZodString;
                calculated_status: z.ZodString;
                override_status_author: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            }, {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        }, {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        }>;
        platform_access: z.ZodString;
        trial_owner_id: z.ZodAny;
        organization_id: z.ZodNumber;
        break_length: z.ZodAny;
        break_reason: z.ZodAny;
        health_triage: z.ZodAny;
        withdrawal_type: z.ZodAny;
        withdrawal_reason: z.ZodAny;
        withdrawal_context: z.ZodAny;
        nps: z.ZodAny;
        mia_notes: z.ZodAny;
        mia_start_date: z.ZodAny;
        payment_status: z.ZodAny;
        price_name: z.ZodAny;
        pdg_id: z.ZodAny;
        onboard_email_sent: z.ZodBoolean;
        accepted_terms: z.ZodBoolean;
        leif_link: z.ZodAny;
        viewed_offer_agreement: z.ZodBoolean;
        role_type: z.ZodAny;
        offer_flow_start_date: z.ZodAny;
        pdg_slides_id: z.ZodAny;
        leif_contract_id: z.ZodAny;
        completed_trial_survey: z.ZodAny;
        program_terms_of_service_id: z.ZodAny;
        show_program_terms_of_service: z.ZodBoolean;
        sfdc_user_id: z.ZodString;
        last_in_program_survey_completion_date: z.ZodAny;
        placed_at: z.ZodAny;
        pathrise_promoter: z.ZodAny;
        subscription_tier_id: z.ZodAny;
        employment_type: z.ZodString;
        began_career_at: z.ZodAny;
        sms_phone: z.ZodAny;
        degree_type: z.ZodAny;
        degree_school: z.ZodAny;
        degree_date: z.ZodAny;
        job_search_plan_id: z.ZodAny;
        job_search_owner_id: z.ZodAny;
        abc_rating: z.ZodAny;
        is_m2m: z.ZodBoolean;
        hedwig_id: z.ZodAny;
        copilot_last_visited: z.ZodAny;
        streak_reset_at: z.ZodAny;
        max_infraction_limit: z.ZodNumber;
        mia_end_date: z.ZodAny;
        tap_status: z.ZodAny;
        timezone: z.ZodString;
        program_phase_scope: z.ZodString;
        pte_conversion_date: z.ZodAny;
        first_career_mentor_reassignment_date: z.ZodAny;
        job_search_plan_accepted_at: z.ZodAny;
        secondary_email: z.ZodAny;
        job_search_plan_draft_id: z.ZodAny;
        app_ready_status: z.ZodString;
        humanized_tracks: z.ZodAny;
        calendly_type: z.ZodAny;
        subscription_tier: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        id: number;
        created_at: string;
        updated_at: string;
        email: string;
        disabled: boolean;
        avatar: {
            url: string;
        };
        role: string;
        first_name: string;
        last_name: string;
        job_history: any[];
        calendar_link: string;
        airtable_rec_id: string;
        on_discourse: boolean;
        sfdc_contact_id: string;
        attendance_overrides: {};
        last_visited: string;
        skills_growth_plan: string;
        gcalendar_id: string;
        test_user: boolean;
        addendums: any[];
        intercom_id: string;
        employee_manager_id: number;
        event_status: {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        };
        platform_access: string;
        organization_id: number;
        onboard_email_sent: boolean;
        accepted_terms: boolean;
        viewed_offer_agreement: boolean;
        show_program_terms_of_service: boolean;
        sfdc_user_id: string;
        employment_type: string;
        is_m2m: boolean;
        max_infraction_limit: number;
        timezone: string;
        program_phase_scope: string;
        app_ready_status: string;
        cohort_id?: any;
        drive_id?: any;
        track?: any;
        summary?: any;
        core_advisor_id?: any;
        support_advisor_id?: any;
        active_status?: any;
        opt_start_date?: any;
        sfdc_opportunity_id?: any;
        fellow_agreement_status?: any;
        isa_status?: any;
        about?: any;
        phone?: any;
        fellow_agreement_deadline?: any;
        work_authorization?: any;
        linkedin?: any;
        portfolio?: any;
        location?: any;
        accelerated_date?: any;
        break_start_date?: any;
        break_end_date?: any;
        payment_type?: any;
        trial_end_date?: any;
        withdrawal_request_date?: any;
        pathrise_end_date?: any;
        secondary_track?: any;
        sfdc_advisor_owner?: any;
        discourse_id?: any;
        discourse_last_seen_at?: any;
        opportunity_type?: any;
        program_manager_id?: any;
        pronouns?: any;
        sfdc_scorecard_notes?: any;
        job_title?: any;
        enrollment_strategy?: any;
        anticipated_pathrise_end_date?: any;
        pathrise_start_date?: any;
        nps_updated_at?: any;
        program_duration?: any;
        trial_owner_id?: any;
        break_length?: any;
        break_reason?: any;
        health_triage?: any;
        withdrawal_type?: any;
        withdrawal_reason?: any;
        withdrawal_context?: any;
        nps?: any;
        mia_notes?: any;
        mia_start_date?: any;
        payment_status?: any;
        price_name?: any;
        pdg_id?: any;
        leif_link?: any;
        role_type?: any;
        offer_flow_start_date?: any;
        pdg_slides_id?: any;
        leif_contract_id?: any;
        completed_trial_survey?: any;
        program_terms_of_service_id?: any;
        last_in_program_survey_completion_date?: any;
        placed_at?: any;
        pathrise_promoter?: any;
        subscription_tier_id?: any;
        began_career_at?: any;
        sms_phone?: any;
        degree_type?: any;
        degree_school?: any;
        degree_date?: any;
        job_search_plan_id?: any;
        job_search_owner_id?: any;
        abc_rating?: any;
        hedwig_id?: any;
        copilot_last_visited?: any;
        streak_reset_at?: any;
        mia_end_date?: any;
        tap_status?: any;
        pte_conversion_date?: any;
        first_career_mentor_reassignment_date?: any;
        job_search_plan_accepted_at?: any;
        secondary_email?: any;
        job_search_plan_draft_id?: any;
        humanized_tracks?: any;
        calendly_type?: any;
        subscription_tier?: any;
    }, {
        id: number;
        created_at: string;
        updated_at: string;
        email: string;
        disabled: boolean;
        avatar: {
            url: string;
        };
        role: string;
        first_name: string;
        last_name: string;
        job_history: any[];
        calendar_link: string;
        airtable_rec_id: string;
        on_discourse: boolean;
        sfdc_contact_id: string;
        attendance_overrides: {};
        last_visited: string;
        skills_growth_plan: string;
        gcalendar_id: string;
        test_user: boolean;
        addendums: any[];
        intercom_id: string;
        employee_manager_id: number;
        event_status: {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        };
        platform_access: string;
        organization_id: number;
        onboard_email_sent: boolean;
        accepted_terms: boolean;
        viewed_offer_agreement: boolean;
        show_program_terms_of_service: boolean;
        sfdc_user_id: string;
        employment_type: string;
        is_m2m: boolean;
        max_infraction_limit: number;
        timezone: string;
        program_phase_scope: string;
        app_ready_status: string;
        cohort_id?: any;
        drive_id?: any;
        track?: any;
        summary?: any;
        core_advisor_id?: any;
        support_advisor_id?: any;
        active_status?: any;
        opt_start_date?: any;
        sfdc_opportunity_id?: any;
        fellow_agreement_status?: any;
        isa_status?: any;
        about?: any;
        phone?: any;
        fellow_agreement_deadline?: any;
        work_authorization?: any;
        linkedin?: any;
        portfolio?: any;
        location?: any;
        accelerated_date?: any;
        break_start_date?: any;
        break_end_date?: any;
        payment_type?: any;
        trial_end_date?: any;
        withdrawal_request_date?: any;
        pathrise_end_date?: any;
        secondary_track?: any;
        sfdc_advisor_owner?: any;
        discourse_id?: any;
        discourse_last_seen_at?: any;
        opportunity_type?: any;
        program_manager_id?: any;
        pronouns?: any;
        sfdc_scorecard_notes?: any;
        job_title?: any;
        enrollment_strategy?: any;
        anticipated_pathrise_end_date?: any;
        pathrise_start_date?: any;
        nps_updated_at?: any;
        program_duration?: any;
        trial_owner_id?: any;
        break_length?: any;
        break_reason?: any;
        health_triage?: any;
        withdrawal_type?: any;
        withdrawal_reason?: any;
        withdrawal_context?: any;
        nps?: any;
        mia_notes?: any;
        mia_start_date?: any;
        payment_status?: any;
        price_name?: any;
        pdg_id?: any;
        leif_link?: any;
        role_type?: any;
        offer_flow_start_date?: any;
        pdg_slides_id?: any;
        leif_contract_id?: any;
        completed_trial_survey?: any;
        program_terms_of_service_id?: any;
        last_in_program_survey_completion_date?: any;
        placed_at?: any;
        pathrise_promoter?: any;
        subscription_tier_id?: any;
        began_career_at?: any;
        sms_phone?: any;
        degree_type?: any;
        degree_school?: any;
        degree_date?: any;
        job_search_plan_id?: any;
        job_search_owner_id?: any;
        abc_rating?: any;
        hedwig_id?: any;
        copilot_last_visited?: any;
        streak_reset_at?: any;
        mia_end_date?: any;
        tap_status?: any;
        pte_conversion_date?: any;
        first_career_mentor_reassignment_date?: any;
        job_search_plan_accepted_at?: any;
        secondary_email?: any;
        job_search_plan_draft_id?: any;
        humanized_tracks?: any;
        calendly_type?: any;
        subscription_tier?: any;
    }>;
    skillsGrowthPlanOptions: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
    strategies: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
    trialOwner: z.ZodObject<{
        id: z.ZodNumber;
        avatar: z.ZodString;
        calendly_link: z.ZodString;
        email: z.ZodString;
        linkedin: z.ZodAny;
        first_name: z.ZodString;
        last_name: z.ZodString;
        full_name: z.ZodString;
        job_title: z.ZodAny;
        job_history: z.ZodArray<z.ZodAny, "many">;
        job_roles: z.ZodArray<z.ZodAny, "many">;
        industries: z.ZodArray<z.ZodAny, "many">;
        organization: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            trial_type: z.ZodString;
            api_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }, {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        }>;
        role: z.ZodString;
        skills: z.ZodArray<z.ZodAny, "many">;
        skills_by_category: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        summary: z.ZodAny;
        track: z.ZodAny;
        label: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_history: any[];
        job_roles: any[];
        industries: any[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: any[];
        skills_by_category: {};
        linkedin?: any;
        job_title?: any;
        summary?: any;
        track?: any;
    }, {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_history: any[];
        job_roles: any[];
        industries: any[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: any[];
        skills_by_category: {};
        linkedin?: any;
        job_title?: any;
        summary?: any;
        track?: any;
    }>;
    user: z.ZodObject<{
        id: z.ZodNumber;
        email: z.ZodString;
        role: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        full_name: string;
        email: string;
        role: string;
    }, {
        id: number;
        full_name: string;
        email: string;
        role: string;
    }>;
    scheduleEvents: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    user: {
        id: number;
        full_name: string;
        email: string;
        role: string;
    };
    fellow: {
        id: number;
        value: number;
        created_at: string;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        drive_id: string;
        active_status: string;
        sfdc_opportunity_id: string;
        isa_status: string;
        phone: string;
        work_authorization: string;
        last_visited: string;
        skills_growth_plan: string;
        payment_type: string;
        trial_end_date: string;
        test_user: boolean;
        addendums: any[];
        opportunity_type: string;
        sfdc_scorecard_notes: string;
        enrollment_strategy: string;
        anticipated_pathrise_end_date: string;
        pathrise_start_date: string;
        price_name: string;
        viewed_offer_agreement: boolean;
        completed_trial_survey: string;
        show_program_terms_of_service: boolean;
        max_infraction_limit: number;
        timezone: string;
        app_ready_status: string;
        subscription_tier: {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        };
        agreement_status: string;
        credit_check: {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        };
        pte_flow: {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        };
        analytics_type: string;
        can_schedule_session_one: boolean;
        show_extension_update_banner: boolean;
        show_onboarding_quiz: boolean;
        cohort_start_date: string;
        cohort_drive_id: string;
        completed_session_one: boolean;
        career_mentor: {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        };
        core_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        daily_streak: number;
        has_completed_onboarding_steps: boolean;
        can_receive_infractions: boolean;
        support_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        job_search_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        drive_url: string;
        job_search_plan_draft_url: string;
        program_terms_and_conditions_url: string;
        engagement_survey_id: number;
        final_trial_end_date: string;
        has_converted: boolean;
        has_not_received_infraction_today: boolean;
        in_free_trial: boolean;
        in_program_isa_overdue: boolean;
        in_syllabus_beta: boolean;
        in_soft_credit_check_beta: boolean;
        show_in_program_survey_banner: boolean;
        org_api_name: string;
        remaining_credits: number;
        pending_credits: number;
        program_manager: {
            full_name?: any;
        };
        scheduled_session_one: boolean;
        scheduled_session_two: boolean;
        settings: {
            id: number;
            name: string;
            active: boolean;
        }[];
        job_preferences: any[];
        show_chat_engagement_survey: boolean;
        show_trial_survey: boolean;
        survey_default_params: {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        };
        pte_flow_started_at: string;
        challenge: string;
        trial_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        };
        workshops_required: boolean;
        qualified_placement_count: number;
        about?: any;
        accelerated_date?: any;
        job_search_plan_accepted_at?: any;
        job_search_plan_doc_url?: any;
        leif_link?: any;
        location?: any;
        offer_flow_active?: any;
        opt_start_date?: any;
        pdg_id?: any;
        portfolio?: any;
        pronouns?: any;
        secondary_track?: any;
        skills_rating?: any;
        summary?: any;
        tap_status?: any;
        abc_rating?: any;
    };
    strategies: {
        value: string;
        label: string;
    }[];
    appProcesses: {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
        job_title: string;
        company: {
            id: number;
        };
        company_name: string;
        job_application_context: string;
        pipeline_connections: {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }[];
        stages: {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }[];
        strategies: any[];
        archived_at?: string | null | undefined;
        interest?: number | null | undefined;
        is_remote?: boolean | null | undefined;
        job_board?: {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        } | null | undefined;
        job_rec_id?: number | null | undefined;
        job_url?: string | null | undefined;
        notes?: string | null | undefined;
        result?: {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        } | null | undefined;
        sourced_job?: any;
    }[];
    careerMentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    fellowNotes: {
        id: number;
        date: string;
        created_at: string;
        updated_at: string;
        body: string;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
        };
        creator: {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        };
        mixed_private_body: string;
        mixed: boolean;
        ext_form_submission: {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        };
        tasks: any[];
        template_is_session: boolean;
        was_session: boolean;
        visible_to_fellow: boolean;
        visible_for_all_mentors: boolean;
        week_two_check_in: boolean;
        note_modules: string[];
        isPublished: boolean;
        rePublish: boolean;
        fellow_view_count: number;
        embedded_attendance_reason: string;
        canceled_accountability: boolean;
        infraction_count: number;
        warning_count: number;
        session: {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        };
        ext_form_submission_status?: string | null | undefined;
        ext_form_submission_completed_at?: string | null | undefined;
        meeting_id?: number | null | undefined;
        template?: string | null | undefined;
        publishedStatus?: string | null | undefined;
        completion_status?: any;
        embedded_fellow_reason?: any;
        embedded_reschedule_cancellation_details?: any;
        accountability_id?: any;
        accountability_reason?: any;
        accountability_record_type?: any;
    }[];
    fellowTasks: {
        id: number;
        created_at: string;
        title: string;
        completed_at: string;
        segment: string;
        completion_status: string;
        due_on: string;
        onboarding: boolean;
        syllabus: boolean;
        priority_status: string;
        hide_from_fellow: boolean;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        resolved_at: string;
        completed_by: string;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        };
        api_name?: any;
        body?: string | null | undefined;
        start_date?: any;
        note_id?: any;
        template_id?: number | null | undefined;
        template_api_name?: string | null | undefined;
        category?: any;
        non_completion_reason?: any;
        non_completion_explanation?: any;
        data?: any;
        meeting_id?: number | null | undefined;
        creator?: {
            id: number;
            full_name: string;
            avatar_url: string;
        } | null | undefined;
    }[];
    infractionCategories: {
        value: string;
        label: string;
    }[];
    industryMentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    jobBoards: {
        value: number;
        label: string;
    }[];
    programManager: {
        id: number;
        created_at: string;
        updated_at: string;
        email: string;
        disabled: boolean;
        avatar: {
            url: string;
        };
        role: string;
        first_name: string;
        last_name: string;
        job_history: any[];
        calendar_link: string;
        airtable_rec_id: string;
        on_discourse: boolean;
        sfdc_contact_id: string;
        attendance_overrides: {};
        last_visited: string;
        skills_growth_plan: string;
        gcalendar_id: string;
        test_user: boolean;
        addendums: any[];
        intercom_id: string;
        employee_manager_id: number;
        event_status: {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        };
        platform_access: string;
        organization_id: number;
        onboard_email_sent: boolean;
        accepted_terms: boolean;
        viewed_offer_agreement: boolean;
        show_program_terms_of_service: boolean;
        sfdc_user_id: string;
        employment_type: string;
        is_m2m: boolean;
        max_infraction_limit: number;
        timezone: string;
        program_phase_scope: string;
        app_ready_status: string;
        cohort_id?: any;
        drive_id?: any;
        track?: any;
        summary?: any;
        core_advisor_id?: any;
        support_advisor_id?: any;
        active_status?: any;
        opt_start_date?: any;
        sfdc_opportunity_id?: any;
        fellow_agreement_status?: any;
        isa_status?: any;
        about?: any;
        phone?: any;
        fellow_agreement_deadline?: any;
        work_authorization?: any;
        linkedin?: any;
        portfolio?: any;
        location?: any;
        accelerated_date?: any;
        break_start_date?: any;
        break_end_date?: any;
        payment_type?: any;
        trial_end_date?: any;
        withdrawal_request_date?: any;
        pathrise_end_date?: any;
        secondary_track?: any;
        sfdc_advisor_owner?: any;
        discourse_id?: any;
        discourse_last_seen_at?: any;
        opportunity_type?: any;
        program_manager_id?: any;
        pronouns?: any;
        sfdc_scorecard_notes?: any;
        job_title?: any;
        enrollment_strategy?: any;
        anticipated_pathrise_end_date?: any;
        pathrise_start_date?: any;
        nps_updated_at?: any;
        program_duration?: any;
        trial_owner_id?: any;
        break_length?: any;
        break_reason?: any;
        health_triage?: any;
        withdrawal_type?: any;
        withdrawal_reason?: any;
        withdrawal_context?: any;
        nps?: any;
        mia_notes?: any;
        mia_start_date?: any;
        payment_status?: any;
        price_name?: any;
        pdg_id?: any;
        leif_link?: any;
        role_type?: any;
        offer_flow_start_date?: any;
        pdg_slides_id?: any;
        leif_contract_id?: any;
        completed_trial_survey?: any;
        program_terms_of_service_id?: any;
        last_in_program_survey_completion_date?: any;
        placed_at?: any;
        pathrise_promoter?: any;
        subscription_tier_id?: any;
        began_career_at?: any;
        sms_phone?: any;
        degree_type?: any;
        degree_school?: any;
        degree_date?: any;
        job_search_plan_id?: any;
        job_search_owner_id?: any;
        abc_rating?: any;
        hedwig_id?: any;
        copilot_last_visited?: any;
        streak_reset_at?: any;
        mia_end_date?: any;
        tap_status?: any;
        pte_conversion_date?: any;
        first_career_mentor_reassignment_date?: any;
        job_search_plan_accepted_at?: any;
        secondary_email?: any;
        job_search_plan_draft_id?: any;
        humanized_tracks?: any;
        calendly_type?: any;
        subscription_tier?: any;
    };
    skillsGrowthPlanOptions: {
        value: string;
        label: string;
    }[];
    trialOwner: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_history: any[];
        job_roles: any[];
        industries: any[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: any[];
        skills_by_category: {};
        linkedin?: any;
        job_title?: any;
        summary?: any;
        track?: any;
    };
    scheduleEvents?: any;
}, {
    user: {
        id: number;
        full_name: string;
        email: string;
        role: string;
    };
    fellow: {
        id: number;
        value: number;
        created_at: string;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        track: string;
        cohort: string;
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        drive_id: string;
        active_status: string;
        sfdc_opportunity_id: string;
        isa_status: string;
        phone: string;
        work_authorization: string;
        last_visited: string;
        skills_growth_plan: string;
        payment_type: string;
        trial_end_date: string;
        test_user: boolean;
        addendums: any[];
        opportunity_type: string;
        sfdc_scorecard_notes: string;
        enrollment_strategy: string;
        anticipated_pathrise_end_date: string;
        pathrise_start_date: string;
        price_name: string;
        viewed_offer_agreement: boolean;
        completed_trial_survey: string;
        show_program_terms_of_service: boolean;
        max_infraction_limit: number;
        timezone: string;
        app_ready_status: string;
        subscription_tier: {
            type: string;
            slug: string;
            limit_credits: boolean;
            max_credits: number;
        };
        agreement_status: string;
        credit_check: {
            result: {
                status: boolean;
                edly_reason: any[];
                edly_result: boolean;
                leif_reason: any[];
                leif_result: boolean;
                climb_reason: any[];
                climb_result: boolean;
                stride_reason: any[];
                stride_result: boolean;
            };
            financing_options: string[];
            ssn_provided: boolean;
        };
        pte_flow: {
            completed_at: string;
            financing: string;
            plan: string;
            pricing: string;
            financing_application_completed_date: string;
        };
        analytics_type: string;
        can_schedule_session_one: boolean;
        show_extension_update_banner: boolean;
        show_onboarding_quiz: boolean;
        cohort_start_date: string;
        cohort_drive_id: string;
        completed_session_one: boolean;
        career_mentor: {
            id: number;
            value: number;
            full_name: string;
            label: string;
            email: string;
            avatar: string;
            linkedin: string;
            role: string;
            first_name: string;
            last_name: string;
            calendly_link: string;
            job_title: string;
            job_history: string[];
            job_roles: any[];
            industries: {
                name: string;
                created_at: string;
                updated_at: string;
            }[];
            organization: {
                id: number;
                name: string;
                created_at: string;
                updated_at: string;
                trial_type: string;
                api_name: string;
            };
            skills: {
                value: number;
                label: string;
                selected: boolean;
            }[];
            skills_by_category: {
                very_comfortable: {
                    value: number;
                    label: string;
                    selected: boolean;
                }[];
            };
            summary: string;
            track?: any;
        };
        core_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        daily_streak: number;
        has_completed_onboarding_steps: boolean;
        can_receive_infractions: boolean;
        support_advisor: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        job_search_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            linkedin: string;
            role: string;
            about?: any;
        };
        drive_url: string;
        job_search_plan_draft_url: string;
        program_terms_and_conditions_url: string;
        engagement_survey_id: number;
        final_trial_end_date: string;
        has_converted: boolean;
        has_not_received_infraction_today: boolean;
        in_free_trial: boolean;
        in_program_isa_overdue: boolean;
        in_syllabus_beta: boolean;
        in_soft_credit_check_beta: boolean;
        show_in_program_survey_banner: boolean;
        org_api_name: string;
        remaining_credits: number;
        pending_credits: number;
        program_manager: {
            full_name?: any;
        };
        scheduled_session_one: boolean;
        scheduled_session_two: boolean;
        settings: {
            id: number;
            name: string;
            active: boolean;
        }[];
        job_preferences: any[];
        show_chat_engagement_survey: boolean;
        show_trial_survey: boolean;
        survey_default_params: {
            user_id: number;
            fellow_email: string;
            first_name: string;
            last_name: string;
            track: string;
            cohort: string;
            mentor_name: string;
        };
        pte_flow_started_at: string;
        challenge: string;
        trial_owner: {
            id: number;
            full_name: string;
            email: string;
            disabled: boolean;
            avatar: string;
            main_mentor: boolean;
        };
        workshops_required: boolean;
        qualified_placement_count: number;
        about?: any;
        accelerated_date?: any;
        job_search_plan_accepted_at?: any;
        job_search_plan_doc_url?: any;
        leif_link?: any;
        location?: any;
        offer_flow_active?: any;
        opt_start_date?: any;
        pdg_id?: any;
        portfolio?: any;
        pronouns?: any;
        secondary_track?: any;
        skills_rating?: any;
        summary?: any;
        tap_status?: any;
        abc_rating?: any;
    };
    strategies: {
        value: string;
        label: string;
    }[];
    appProcesses: {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
        job_title: string;
        company: {
            id: number;
        };
        company_name: string;
        job_application_context: string;
        pipeline_connections: {
            id: number;
            created_at: string;
            updated_at: string;
            channel: string;
            user: {
                id: number;
                full_name: string;
            };
            contact: {
                id?: number | null | undefined;
                contact_name?: string | null | undefined;
                contact_email?: string | null | undefined;
                linkedin_url?: string | null | undefined;
                contact_role?: string | null | undefined;
            };
            outreach_date: string;
        }[];
        stages: {
            id: number;
            date: string;
            created_at: string;
            round: number;
            interview_type: string;
            is_interview: boolean;
            questions: {
                id: number;
                title: string;
            }[];
            notes?: string | null | undefined;
            company_id?: number | null | undefined;
        }[];
        strategies: any[];
        archived_at?: string | null | undefined;
        interest?: number | null | undefined;
        is_remote?: boolean | null | undefined;
        job_board?: {
            id: number;
            root_domain: string;
            domains: string[];
            name: string;
            created_at: string;
            updated_at: string;
        } | null | undefined;
        job_rec_id?: number | null | undefined;
        job_url?: string | null | undefined;
        notes?: string | null | undefined;
        result?: {
            id: number;
            date: string;
            outcome: string;
            notes?: any;
        } | null | undefined;
        sourced_job?: any;
    }[];
    careerMentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    fellowNotes: {
        id: number;
        date: string;
        created_at: string;
        updated_at: string;
        body: string;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
        };
        creator: {
            full_name: string;
            id?: number | null | undefined;
            role?: string | null | undefined;
            avatar_url?: string | null | undefined;
        };
        mixed_private_body: string;
        mixed: boolean;
        ext_form_submission: {
            id?: number | null | undefined;
            data?: {
                value: string;
            } | null | undefined;
        };
        tasks: any[];
        template_is_session: boolean;
        was_session: boolean;
        visible_to_fellow: boolean;
        visible_for_all_mentors: boolean;
        week_two_check_in: boolean;
        note_modules: string[];
        isPublished: boolean;
        rePublish: boolean;
        fellow_view_count: number;
        embedded_attendance_reason: string;
        canceled_accountability: boolean;
        infraction_count: number;
        warning_count: number;
        session: {
            id?: number | null | undefined;
            topic?: string | null | undefined;
        };
        ext_form_submission_status?: string | null | undefined;
        ext_form_submission_completed_at?: string | null | undefined;
        meeting_id?: number | null | undefined;
        template?: string | null | undefined;
        publishedStatus?: string | null | undefined;
        completion_status?: any;
        embedded_fellow_reason?: any;
        embedded_reschedule_cancellation_details?: any;
        accountability_id?: any;
        accountability_reason?: any;
        accountability_record_type?: any;
    }[];
    fellowTasks: {
        id: number;
        created_at: string;
        title: string;
        completed_at: string;
        segment: string;
        completion_status: string;
        due_on: string;
        onboarding: boolean;
        syllabus: boolean;
        priority_status: string;
        hide_from_fellow: boolean;
        weekly_check_in: boolean;
        is_auto_created: boolean;
        resolved_at: string;
        completed_by: string;
        fellow: {
            id: number;
            full_name: string;
            avatar_url: string;
            has_finalized_resume: boolean;
        };
        api_name?: any;
        body?: string | null | undefined;
        start_date?: any;
        note_id?: any;
        template_id?: number | null | undefined;
        template_api_name?: string | null | undefined;
        category?: any;
        non_completion_reason?: any;
        non_completion_explanation?: any;
        data?: any;
        meeting_id?: number | null | undefined;
        creator?: {
            id: number;
            full_name: string;
            avatar_url: string;
        } | null | undefined;
    }[];
    infractionCategories: {
        value: string;
        label: string;
    }[];
    industryMentor: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        linkedin: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_title: string;
        job_history: string[];
        job_roles: any[];
        industries: {
            name: string;
            created_at: string;
            updated_at: string;
        }[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: {
            value: number;
            label: string;
            selected: boolean;
        }[];
        skills_by_category: {
            very_comfortable: {
                value: number;
                label: string;
                selected: boolean;
            }[];
        };
        summary: string;
        track?: any;
    };
    jobBoards: {
        value: number;
        label: string;
    }[];
    programManager: {
        id: number;
        created_at: string;
        updated_at: string;
        email: string;
        disabled: boolean;
        avatar: {
            url: string;
        };
        role: string;
        first_name: string;
        last_name: string;
        job_history: any[];
        calendar_link: string;
        airtable_rec_id: string;
        on_discourse: boolean;
        sfdc_contact_id: string;
        attendance_overrides: {};
        last_visited: string;
        skills_growth_plan: string;
        gcalendar_id: string;
        test_user: boolean;
        addendums: any[];
        intercom_id: string;
        employee_manager_id: number;
        event_status: {
            fsm_call: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
            };
            career_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
            industry_kickoff: {
                event_type: string;
                override_count: number;
                override_status: string;
                calculated_status: string;
                override_status_author: string;
                scheduled_date: string;
            };
        };
        platform_access: string;
        organization_id: number;
        onboard_email_sent: boolean;
        accepted_terms: boolean;
        viewed_offer_agreement: boolean;
        show_program_terms_of_service: boolean;
        sfdc_user_id: string;
        employment_type: string;
        is_m2m: boolean;
        max_infraction_limit: number;
        timezone: string;
        program_phase_scope: string;
        app_ready_status: string;
        cohort_id?: any;
        drive_id?: any;
        track?: any;
        summary?: any;
        core_advisor_id?: any;
        support_advisor_id?: any;
        active_status?: any;
        opt_start_date?: any;
        sfdc_opportunity_id?: any;
        fellow_agreement_status?: any;
        isa_status?: any;
        about?: any;
        phone?: any;
        fellow_agreement_deadline?: any;
        work_authorization?: any;
        linkedin?: any;
        portfolio?: any;
        location?: any;
        accelerated_date?: any;
        break_start_date?: any;
        break_end_date?: any;
        payment_type?: any;
        trial_end_date?: any;
        withdrawal_request_date?: any;
        pathrise_end_date?: any;
        secondary_track?: any;
        sfdc_advisor_owner?: any;
        discourse_id?: any;
        discourse_last_seen_at?: any;
        opportunity_type?: any;
        program_manager_id?: any;
        pronouns?: any;
        sfdc_scorecard_notes?: any;
        job_title?: any;
        enrollment_strategy?: any;
        anticipated_pathrise_end_date?: any;
        pathrise_start_date?: any;
        nps_updated_at?: any;
        program_duration?: any;
        trial_owner_id?: any;
        break_length?: any;
        break_reason?: any;
        health_triage?: any;
        withdrawal_type?: any;
        withdrawal_reason?: any;
        withdrawal_context?: any;
        nps?: any;
        mia_notes?: any;
        mia_start_date?: any;
        payment_status?: any;
        price_name?: any;
        pdg_id?: any;
        leif_link?: any;
        role_type?: any;
        offer_flow_start_date?: any;
        pdg_slides_id?: any;
        leif_contract_id?: any;
        completed_trial_survey?: any;
        program_terms_of_service_id?: any;
        last_in_program_survey_completion_date?: any;
        placed_at?: any;
        pathrise_promoter?: any;
        subscription_tier_id?: any;
        began_career_at?: any;
        sms_phone?: any;
        degree_type?: any;
        degree_school?: any;
        degree_date?: any;
        job_search_plan_id?: any;
        job_search_owner_id?: any;
        abc_rating?: any;
        hedwig_id?: any;
        copilot_last_visited?: any;
        streak_reset_at?: any;
        mia_end_date?: any;
        tap_status?: any;
        pte_conversion_date?: any;
        first_career_mentor_reassignment_date?: any;
        job_search_plan_accepted_at?: any;
        secondary_email?: any;
        job_search_plan_draft_id?: any;
        humanized_tracks?: any;
        calendly_type?: any;
        subscription_tier?: any;
    };
    skillsGrowthPlanOptions: {
        value: string;
        label: string;
    }[];
    trialOwner: {
        id: number;
        value: number;
        full_name: string;
        label: string;
        email: string;
        avatar: string;
        role: string;
        first_name: string;
        last_name: string;
        calendly_link: string;
        job_history: any[];
        job_roles: any[];
        industries: any[];
        organization: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
            trial_type: string;
            api_name: string;
        };
        skills: any[];
        skills_by_category: {};
        linkedin?: any;
        job_title?: any;
        summary?: any;
        track?: any;
    };
    scheduleEvents?: any;
}>;
export type RootType = z.infer<typeof rootSchema>;

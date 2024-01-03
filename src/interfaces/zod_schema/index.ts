import {z} from 'zod';

export const jobBoardSchema = z.object({
  id: z.number(),
  root_domain: z.string(),
  domains: z.array(z.string()),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const companySchema = z.object({
  id: z.number(),
});

export const questionSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const resultSchema = z.object({
  id: z.number(),
  outcome: z.string(),
  date: z.string(),
  notes: z.unknown(),
});

export const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
});

export const contactSchema = z.object({
  id: z.number().nullish(),
  contact_name: z.string().nullish(),
  contact_email: z.string().nullish(),
  linkedin_url: z.string().nullish(),
  contact_role: z.string().nullish(),
});

export const industrySchema = z.object({
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const organizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  trial_type: z.string(),
  api_name: z.string(),
});

export const skillSchema = z.object({
  label: z.string(),
  value: z.number(),
  selected: z.boolean(),
});

export const veryComfortableSchema = z.object({
  label: z.string(),
  value: z.number(),
  selected: z.boolean(),
});

export const result2Schema = z.object({
  status: z.boolean(),
  edly_reason: z.array(z.unknown()),
  edly_result: z.boolean(),
  leif_reason: z.array(z.unknown()),
  leif_result: z.boolean(),
  climb_reason: z.array(z.unknown()),
  climb_result: z.boolean(),
  stride_reason: z.array(z.unknown()),
  stride_result: z.boolean(),
});

export const pteFlowSchema = z.object({
  completed_at: z.string(),
  financing: z.string(),
  plan: z.string(),
  pricing: z.string(),
  financing_application_completed_date: z.string(),
});

export const coreAdvisorSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  disabled: z.boolean(),
  avatar: z.string(),
  linkedin: z.string(),
  about: z.unknown(),
  role: z.string(),
});

export const supportAdvisorSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  disabled: z.boolean(),
  avatar: z.string(),
  linkedin: z.string(),
  about: z.unknown(),
  role: z.string(),
});

export const jobSearchOwnerSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  disabled: z.boolean(),
  avatar: z.string(),
  linkedin: z.string(),
  about: z.unknown(),
  role: z.string(),
});

export const organization3Schema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  trial_type: z.string(),
  api_name: z.string(),
});

export const subscriptionTierSchema = z.object({
  slug: z.string(),
  type: z.string(),
  limit_credits: z.boolean(),
  max_credits: z.number(),
});

export const programManagerSchema = z.object({
  full_name: z.unknown(),
});

export const settingSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  name: z.string(),
});

export const surveyDefaultParamsSchema = z.object({
  user_id: z.number(),
  fellow_email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  track: z.string(),
  cohort: z.string(),
  mentor_name: z.string(),
});

export const trialOwnerSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  disabled: z.boolean(),
  avatar: z.string(),
  main_mentor: z.boolean(),
});

export const fellow2Schema = z.object({
  id: z.number(),
  full_name: z.string(),
  avatar_url: z.string(),
});

export const creatorSchema = z.object({
  id: z.number().nullish(),
  role: z.string().nullish(),
  avatar_url: z.string().nullish(),
  full_name: z.string(),
});

export const dataSchema = z.object({
  value: z.string(),
});

export const sessionSchema = z.object({
  id: z.number().nullish(),
  topic: z.string().nullish(),
});

export const fellow3Schema = z.object({
  id: z.number(),
  has_finalized_resume: z.boolean(),
  avatar_url: z.string(),
  full_name: z.string(),
});

export const creator2Schema = z.object({
  id: z.number(),
  avatar_url: z.string(),
  full_name: z.string(),
});

export const infractionCategorySchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const jobBoard2Schema = z.object({
  label: z.string(),
  value: z.number(),
});

export const avatarSchema = z.object({
  url: z.string(),
});

export const attendanceOverridesSchema = z.object({});

export const fsmCallSchema = z.object({
  event_type: z.string(),
  override_count: z.number(),
  override_status: z.string(),
  calculated_status: z.string(),
  override_status_author: z.string(),
});

export const careerKickoffSchema = z.object({
  event_type: z.string(),
  override_count: z.number(),
  scheduled_date: z.string(),
  override_status: z.string(),
  calculated_status: z.string(),
  override_status_author: z.string(),
});

export const industryKickoffSchema = z.object({
  event_type: z.string(),
  override_count: z.number(),
  scheduled_date: z.string(),
  override_status: z.string(),
  calculated_status: z.string(),
  override_status_author: z.string(),
});

export const skillsGrowthPlanOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const strategySchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const organization5Schema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  trial_type: z.string(),
  api_name: z.string(),
});

export const skillsByCategory4Schema = z.object({});

export const user2Schema = z.object({
  id: z.number(),
  email: z.string(),
  role: z.string(),
  full_name: z.string(),
});

export const stageSchema = z.object({
  id: z.number(),
  date: z.string(),
  notes: z.string().nullish(),
  round: z.number(),
  created_at: z.string(),
  interview_type: z.string(),
  company_id: z.number().nullish(),
  is_interview: z.boolean(),
  questions: z.array(questionSchema),
});

export const pipelineConnectionSchema = z.object({
  id: z.number(),
  channel: z.string(),
  user: userSchema,
  contact: contactSchema,
  created_at: z.string(),
  updated_at: z.string(),
  outreach_date: z.string(),
});

export const skillsByCategorySchema = z.object({
  very_comfortable: z.array(veryComfortableSchema),
});

export const creditCheckSchema = z.object({
  result: result2Schema,
  financing_options: z.array(z.string()),
  ssn_provided: z.boolean(),
});

export const skillsByCategory2Schema = z.object({
  very_comfortable: z.array(veryComfortableSchema),
});

export const extFormSubmissionSchema = z.object({
  id: z.number().nullish(),
  data: dataSchema.nullish(),
});

export const fellowTaskSchema = z.object({
  id: z.number(),
  segment: z.string(),
  api_name: z.unknown(),
  body: z.string().nullish(),
  completed_at: z.string(),
  completion_status: z.string(),
  created_at: z.string(),
  start_date: z.unknown(),
  due_on: z.string(),
  onboarding: z.boolean(),
  syllabus: z.boolean(),
  priority_status: z.string(),
  hide_from_fellow: z.boolean(),
  note_id: z.unknown(),
  title: z.string(),
  template_id: z.number().nullish(),
  template_api_name: z.string().nullish(),
  weekly_check_in: z.boolean(),
  is_auto_created: z.boolean(),
  category: z.unknown(),
  non_completion_reason: z.unknown(),
  non_completion_explanation: z.unknown(),
  data: z.unknown(),
  resolved_at: z.string(),
  meeting_id: z.number().nullish(),
  completed_by: z.string(),
  fellow: fellow3Schema,
  creator: creator2Schema.nullish(),
});

export const skillsByCategory3Schema = z.object({
  very_comfortable: z.array(veryComfortableSchema),
});

export const eventStatusSchema = z.object({
  fsm_call: fsmCallSchema,
  career_kickoff: careerKickoffSchema,
  industry_kickoff: industryKickoffSchema,
});

export const trialOwner2Schema = z.object({
  id: z.number(),
  avatar: z.string(),
  calendly_link: z.string(),
  email: z.string(),
  linkedin: z.unknown(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  job_title: z.unknown(),
  job_history: z.array(z.unknown()),
  job_roles: z.array(z.unknown()),
  industries: z.array(z.unknown()),
  organization: organization5Schema,
  role: z.string(),
  skills: z.array(z.unknown()),
  skills_by_category: skillsByCategory4Schema,
  summary: z.unknown(),
  track: z.unknown(),
  label: z.string(),
  value: z.number(),
});

export const appProcessSchema = z.object({
  archived_at: z.string().nullish(),
  company: companySchema,
  company_name: z.string(),
  created_at: z.string(),
  id: z.number(),
  interest: z.number().nullish(),
  is_remote: z.boolean().nullish(),
  job_application_context: z.string(),
  job_board: jobBoardSchema.nullish(),
  job_rec_id: z.number().nullish(),
  job_title: z.string(),
  job_url: z.string().url().nullish(),
  notes: z.string().nullish(),
  pipeline_connections: z.array(pipelineConnectionSchema),
  result: resultSchema.nullish(),
  sourced_job: z.unknown(),
  stages: z.array(stageSchema),
  status: z.string(),
  strategies: z.array(z.unknown()),
  updated_at: z.string(),
});
export type AppProcess = z.infer<typeof appProcessSchema>;

export const careerMentorSchema = z.object({
  id: z.number(),
  avatar: z.string(),
  calendly_link: z.string(),
  email: z.string(),
  linkedin: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  job_title: z.string(),
  job_history: z.array(z.string()),
  job_roles: z.array(z.unknown()),
  industries: z.array(industrySchema),
  organization: organizationSchema,
  role: z.string(),
  skills: z.array(skillSchema),
  skills_by_category: skillsByCategorySchema,
  summary: z.string(),
  track: z.unknown(),
  label: z.string(),
  value: z.number(),
});

export const careerMentor2Schema = z.object({
  id: z.number(),
  avatar: z.string(),
  calendly_link: z.string(),
  email: z.string(),
  linkedin: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  job_title: z.string(),
  job_history: z.array(z.string()),
  job_roles: z.array(z.unknown()),
  industries: z.array(industrySchema),
  organization: organizationSchema,
  role: z.string(),
  skills: z.array(skillSchema),
  skills_by_category: skillsByCategory2Schema,
  summary: z.string(),
  track: z.unknown(),
  label: z.string(),
  value: z.number(),
});

export const fellowNoteSchema = z.object({
  id: z.number(),
  body: z.string(),
  mixed_private_body: z.string(),
  mixed: z.boolean(),
  created_at: z.string(),
  fellow: fellow2Schema,
  creator: creatorSchema,
  date: z.string(),
  ext_form_submission: extFormSubmissionSchema,
  ext_form_submission_status: z.string().nullish(),
  ext_form_submission_completed_at: z.string().nullish(),
  meeting_id: z.number().nullish(),
  tasks: z.array(z.unknown()),
  template: z.string().nullish(),
  template_is_session: z.boolean(),
  was_session: z.boolean(),
  updated_at: z.string(),
  visible_to_fellow: z.boolean(),
  visible_for_all_mentors: z.boolean(),
  weekly_check_in: z.boolean(),
  week_two_check_in: z.boolean(),
  note_modules: z.array(z.string()),
  is_auto_created: z.boolean(),
  isPublished: z.boolean(),
  rePublish: z.boolean(),
  publishedStatus: z.string().nullish(),
  fellow_view_count: z.number(),
  completion_status: z.unknown(),
  embedded_attendance_reason: z.string(),
  embedded_fellow_reason: z.unknown(),
  embedded_reschedule_cancellation_details: z.unknown(),
  accountability_id: z.unknown(),
  accountability_reason: z.unknown(),
  canceled_accountability: z.boolean(),
  infraction_count: z.number(),
  warning_count: z.number(),
  session: sessionSchema,
  accountability_record_type: z.unknown(),
});

export const industryMentorSchema = z.object({
  id: z.number(),
  avatar: z.string(),
  calendly_link: z.string(),
  email: z.string(),
  linkedin: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  job_title: z.string(),
  job_history: z.array(z.string()),
  job_roles: z.array(z.unknown()),
  industries: z.array(industrySchema),
  organization: organizationSchema,
  role: z.string(),
  skills: z.array(skillSchema),
  skills_by_category: skillsByCategory3Schema,
  summary: z.string(),
  track: z.unknown(),
  label: z.string(),
  value: z.number(),
});

export const programManager2Schema = z.object({
  id: z.number(),
  email: z.string(),
  avatar: avatarSchema,
  cohort_id: z.unknown(),
  role: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  drive_id: z.unknown(),
  created_at: z.string(),
  updated_at: z.string(),
  track: z.unknown(),
  summary: z.unknown(),
  core_advisor_id: z.unknown(),
  support_advisor_id: z.unknown(),
  calendar_link: z.string(),
  airtable_rec_id: z.string(),
  active_status: z.unknown(),
  opt_start_date: z.unknown(),
  on_discourse: z.boolean(),
  sfdc_contact_id: z.string(),
  sfdc_opportunity_id: z.unknown(),
  fellow_agreement_status: z.unknown(),
  isa_status: z.unknown(),
  about: z.unknown(),
  attendance_overrides: attendanceOverridesSchema,
  phone: z.unknown(),
  fellow_agreement_deadline: z.unknown(),
  work_authorization: z.unknown(),
  last_visited: z.string(),
  linkedin: z.unknown(),
  portfolio: z.unknown(),
  disabled: z.boolean(),
  skills_growth_plan: z.string(),
  gcalendar_id: z.string(),
  location: z.unknown(),
  accelerated_date: z.unknown(),
  break_start_date: z.unknown(),
  break_end_date: z.unknown(),
  payment_type: z.unknown(),
  trial_end_date: z.unknown(),
  withdrawal_request_date: z.unknown(),
  pathrise_end_date: z.unknown(),
  secondary_track: z.unknown(),
  test_user: z.boolean(),
  sfdc_advisor_owner: z.unknown(),
  addendums: z.array(z.unknown()),
  discourse_id: z.unknown(),
  discourse_last_seen_at: z.unknown(),
  intercom_id: z.string(),
  opportunity_type: z.unknown(),
  program_manager_id: z.unknown(),
  pronouns: z.unknown(),
  sfdc_scorecard_notes: z.unknown(),
  employee_manager_id: z.number(),
  job_title: z.unknown(),
  job_history: z.array(z.unknown()),
  enrollment_strategy: z.unknown(),
  anticipated_pathrise_end_date: z.unknown(),
  pathrise_start_date: z.unknown(),
  nps_updated_at: z.unknown(),
  program_duration: z.unknown(),
  event_status: eventStatusSchema,
  platform_access: z.string(),
  trial_owner_id: z.unknown(),
  organization_id: z.number(),
  break_length: z.unknown(),
  break_reason: z.unknown(),
  health_triage: z.unknown(),
  withdrawal_type: z.unknown(),
  withdrawal_reason: z.unknown(),
  withdrawal_context: z.unknown(),
  nps: z.unknown(),
  mia_notes: z.unknown(),
  mia_start_date: z.unknown(),
  payment_status: z.unknown(),
  price_name: z.unknown(),
  pdg_id: z.unknown(),
  onboard_email_sent: z.boolean(),
  accepted_terms: z.boolean(),
  leif_link: z.unknown(),
  viewed_offer_agreement: z.boolean(),
  role_type: z.unknown(),
  offer_flow_start_date: z.unknown(),
  pdg_slides_id: z.unknown(),
  leif_contract_id: z.unknown(),
  completed_trial_survey: z.unknown(),
  program_terms_of_service_id: z.unknown(),
  show_program_terms_of_service: z.boolean(),
  sfdc_user_id: z.string(),
  last_in_program_survey_completion_date: z.unknown(),
  placed_at: z.unknown(),
  pathrise_promoter: z.unknown(),
  subscription_tier_id: z.unknown(),
  employment_type: z.string(),
  began_career_at: z.unknown(),
  sms_phone: z.unknown(),
  degree_type: z.unknown(),
  degree_school: z.unknown(),
  degree_date: z.unknown(),
  job_search_plan_id: z.unknown(),
  job_search_owner_id: z.unknown(),
  abc_rating: z.unknown(),
  is_m2m: z.boolean(),
  hedwig_id: z.unknown(),
  copilot_last_visited: z.unknown(),
  streak_reset_at: z.unknown(),
  max_infraction_limit: z.number(),
  mia_end_date: z.unknown(),
  tap_status: z.unknown(),
  timezone: z.string(),
  program_phase_scope: z.string(),
  pte_conversion_date: z.unknown(),
  first_career_mentor_reassignment_date: z.unknown(),
  job_search_plan_accepted_at: z.unknown(),
  secondary_email: z.unknown(),
  job_search_plan_draft_id: z.unknown(),
  app_ready_status: z.string(),
  humanized_tracks: z.unknown(),
  calendly_type: z.unknown(),
  subscription_tier: z.unknown(),
});

export const fellowSchema = z.object({
  id: z.number(),
  about: z.unknown(),
  accelerated_date: z.unknown(),
  active_status: z.string(),
  addendums: z.array(z.unknown()),
  app_ready_status: z.string(),
  agreement_status: z.string(),
  anticipated_pathrise_end_date: z.string(),
  credit_check: creditCheckSchema,
  pte_flow: pteFlowSchema,
  job_search_plan_accepted_at: z.unknown(),
  show_program_terms_of_service: z.boolean(),
  analytics_type: z.string(),
  avatar: z.string(),
  can_schedule_session_one: z.boolean(),
  cohort: z.string(),
  show_extension_update_banner: z.boolean(),
  show_onboarding_quiz: z.boolean(),
  cohort_start_date: z.string(),
  cohort_drive_id: z.string(),
  created_at: z.string(),
  completed_session_one: z.boolean(),
  completed_trial_survey: z.string(),
  career_mentor: careerMentor2Schema,
  core_advisor: coreAdvisorSchema,
  daily_streak: z.number(),
  has_completed_onboarding_steps: z.boolean(),
  max_infraction_limit: z.number(),
  can_receive_infractions: z.boolean(),
  support_advisor: supportAdvisorSchema,
  job_search_owner: jobSearchOwnerSchema,
  drive_url: z.string(),
  job_search_plan_doc_url: z.unknown(),
  job_search_plan_draft_url: z.string(),
  drive_id: z.string(),
  program_terms_and_conditions_url: z.string(),
  email: z.string(),
  enrollment_strategy: z.string(),
  engagement_survey_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  final_trial_end_date: z.string(),
  full_name: z.string(),
  has_converted: z.boolean(),
  has_not_received_infraction_today: z.boolean(),
  in_free_trial: z.boolean(),
  in_program_isa_overdue: z.boolean(),
  in_syllabus_beta: z.boolean(),
  in_soft_credit_check_beta: z.boolean(),
  isa_status: z.string(),
  leif_link: z.unknown(),
  last_visited: z.string(),
  linkedin: z.string(),
  location: z.unknown(),
  show_in_program_survey_banner: z.boolean(),
  offer_flow_active: z.unknown(),
  opportunity_type: z.string(),
  opt_start_date: z.unknown(),
  org_api_name: z.string(),
  organization: organization3Schema,
  payment_type: z.string(),
  pathrise_start_date: z.string(),
  pdg_id: z.unknown(),
  phone: z.string(),
  portfolio: z.unknown(),
  price_name: z.string(),
  subscription_tier: subscriptionTierSchema,
  remaining_credits: z.number(),
  pending_credits: z.number(),
  program_manager: programManagerSchema,
  pronouns: z.unknown(),
  scheduled_session_one: z.boolean(),
  scheduled_session_two: z.boolean(),
  secondary_track: z.unknown(),
  settings: z.array(settingSchema),
  job_preferences: z.array(z.unknown()),
  role: z.string(),
  sfdc_opportunity_id: z.string(),
  sfdc_scorecard_notes: z.string(),
  show_chat_engagement_survey: z.boolean(),
  show_trial_survey: z.boolean(),
  skills_growth_plan: z.string(),
  skills_rating: z.unknown(),
  summary: z.unknown(),
  survey_default_params: surveyDefaultParamsSchema,
  tap_status: z.unknown(),
  test_user: z.boolean(),
  timezone: z.string(),
  pte_flow_started_at: z.string(),
  track: z.string(),
  challenge: z.string(),
  trial_end_date: z.string(),
  trial_owner: trialOwnerSchema,
  viewed_offer_agreement: z.boolean(),
  work_authorization: z.string(),
  workshops_required: z.boolean(),
  label: z.string(),
  value: z.number(),
  abc_rating: z.unknown(),
  qualified_placement_count: z.number(),
});

export const rootSchema = z.object({
  appProcesses: z.array(appProcessSchema),
  careerMentor: careerMentorSchema,
  fellow: fellowSchema,
  fellowNotes: z.array(fellowNoteSchema),
  fellowTasks: z.array(fellowTaskSchema),
  infractionCategories: z.array(infractionCategorySchema),
  industryMentor: industryMentorSchema,
  jobBoards: z.array(jobBoard2Schema),
  programManager: programManager2Schema,
  skillsGrowthPlanOptions: z.array(skillsGrowthPlanOptionSchema),
  strategies: z.array(strategySchema),
  trialOwner: trialOwner2Schema,
  user: user2Schema,
  scheduleEvents: z.unknown(),
});

export type RootType = z.infer<typeof rootSchema>;

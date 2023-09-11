import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { formatGetTime, formatScheduleDate } from "../helpers/UtilKit";

export function getFormattedNotification({ viewer, notification }) {
  const { uid, kind, model_kind, source, is_unread, created_at } = notification;

  const notificationIcons = {
    PATIENT: UserIcon,
    DOCTOR: UserIcon,
    ORGANIZATION: UserGroupIcon,
    APPOINTMENT: VideoCameraIcon,
    PRESCRIPTION: ClipboardDocumentCheckIcon,
  };

  const notificationMessages = {
    patient: {
      PASSWORD_CHANGED: "You password has been changed",
      INCOMPLETE_PROFILE: "Your profile is incomplete",
      APPOINTMENT_REQUESTED: `You have an upcoming appointment at ${formatGetTime(
        source?.schedule_start
      )} - ${formatScheduleDate(source?.schedule_start)}.`,

      APPOINTMENT_SCHEDULED: `You have an scheduled appointment with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      APPOINTMENT_COMPLETED: `Your Appointment with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} has completed.`,

      APPOINTMENT_CANCELED: `Your Appointment at ${formatGetTime(
        source?.schedule_start
      )} - ${formatScheduleDate(source?.schedule_start)} is canceled.`,

      APPOINTMENT_REMOVED: `Your Appointment at ${formatGetTime(
        source?.schedule_start
      )} - ${formatScheduleDate(source?.schedule_start)} is rejected.`,

      APPOINTMENT_REMINDER: `You have an appointment with Dr. ${source?.doctor} in 15 minutes.`,
      APPOINTMENT_STARTED: `Your Appointment with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is started.`,

      SCHEDULE_TIME_UPDATED: `Schedule time has been updated for your appointment with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      PRESCRIPTION_CREATED: `You have a new prescription from your appointment with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,
    },

    doctor: {
      PASSWORD_CHANGED: "You password has been changed",
      INCOMPLETE_PROFILE: "Your profile is incomplete",
      APPOINTMENT_REQUESTED: `You have a requested appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      APPOINTMENT_SCHEDULED: `You have an appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      APPOINTMENT_COMPLETED: `Your Appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} has been completed.`,

      APPOINTMENT_CANCELED: `Your Appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is canceled.`,

      APPOINTMENT_REMOVED: `Your Appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is rejected.`,

      APPOINTMENT_REMINDER: `You have an appointment with ${source?.patient} in 15 minutes.`,
      APPOINTMENT_STARTED: `Your Appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is started.`,

      SCHEDULE_TIME_UPDATED: `Scheduled time has been updated for your appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      PRESCRIPTION_CREATED: `You have crated a prescription for your appointment with ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,
    },

    clinic: {
      PASSWORD_CHANGED: "You password has been changed",
      INCOMPLETE_PROFILE: "Your profile is incomplete",
      APPOINTMENT_REQUESTED: `A new appointment is booked for ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      APPOINTMENT_SCHEDULED: `Dr. ${
        source?.doctor
      } has been assigned for the appointment of ${
        source?.patient
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )}.`,

      APPOINTMENT_COMPLETED: `Appointment for ${source?.patient} with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} has been completed.`,

      APPOINTMENT_CANCELED: `Appointment for ${source?.patient} with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is canceled.`,

      APPOINTMENT_REMOVED: `Appointment for ${source?.patient} with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is rejected.`,

      APPOINTMENT_REMINDER: `Appointment for ${source?.patient} with Dr. ${source?.doctor} will be started in 15 minutes.`,
      APPOINTMENT_STARTED: `Appointment for ${source?.patient} with Dr. ${
        source?.doctor
      } at ${formatGetTime(source?.schedule_start)} - ${formatScheduleDate(
        source?.schedule_start
      )} is started.`,

      SCHEDULE_TIME_UPDATED: `Schedule time has been updated for the appointment of ${
        source?.patient
      } with Dr. ${source?.doctor} at ${formatGetTime(
        source?.schedule_start
      )} - ${formatScheduleDate(source?.schedule_start)}.`,

      PRESCRIPTION_CREATED: `A new prescription has been created by Dr. ${
        source?.doctor
      } for ${source?.patient}. Appointment: ${formatGetTime(
        source?.schedule_start
      )} - ${formatScheduleDate(source?.schedule_start)}.`,
    },
  };

  const notificationLinks = {
    patient: {
      PATIENT: `/me`,
      APPOINTMENT: `/me/appointments/${source?.uid}`,
      PRESCRIPTION: `/me/prescriptions/${source?.uid}`,
    },
    doctor: {
      DOCTOR: "/doctor/profile",
      APPOINTMENT: `/doctor/appointments/${source?.uid}?join_call=false`,
      PRESCRIPTION: `/doctor/prescriptions/${source?.uid}`,
    },
    clinic: {
      PATIENT: `/clinic/patient-management`,
      DOCTOR: "/clinic/doctor-management",
      APPOINTMENT: `/clinic/appointments/${source?.uid}`,
      PRESCRIPTION: `/clinic/prescriptions/${source?.uid}`,
    },
  };

  return {
    uid,
    created_at,
    icon: notificationIcons[model_kind],
    message: notificationMessages[viewer][kind],
    href: notificationLinks[viewer][model_kind],
    is_unread,
  };
}

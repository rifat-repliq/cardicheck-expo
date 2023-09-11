import HTTPKit, { client } from "./HTTPKit";

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const get = (url, options) => {
  return HTTPKit.get(url, options);
};

const post = (url, payload) => {
  return HTTPKit.post(url, payload);
};

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  auth: {
    login: (phone, password) => {
      const url = "token";
      const payload = {
        phone,
        password,
      };
      return post(url, payload);
    },
    register: (payload) => {
      const url = "patient/auth/register";
      return client.post(url, payload);
    },
  },

  public: {
    currentOrganization: () => {
      const url = "we";
      return client.get(url);
    },
    getOrganizations: () => {
      const url = "organizations";
      return client.get(url);
    },
    postVideoCall: (payload) => {
      const url = "calls";
      return client.post(url, payload);
    },
    postToGetVideoCallToken: (payload) => {
      const url = `calls`;
      return client.post(url, payload);
    },
    getNotifications: () => {
      const url = "notifications";
      return client.get(url);
    },
    markNotificationAsRead: (uid) => {
      const url = `notifications/${uid}`;
      return client.get(url);
    },
    markAllNotificationAsRead: () => {
      const url = `notifications?mark-all-as-read=true`;
      return client.get(url);
    },
  },

  me: {
    getMe: () => {
      const url = "me";
      return client.get(url);
    },
    patchMe: (payload) => {
      const url = "me";
      return client.patch(url, payload, defaultFileUploadConfig);
    },
    appointment: {
      bookAppointment: (payload) => {
        const url = "patient/appointments";
        return client.post(url, payload);
      },
      getAppointments: (params) => {
        const url = `patient/appointments`;
        return client.get(url, { params });
      },
      searchCompletedAppointments: (searchKey) => {
        const url = `patient/appointments/complete`;
        return client.get(url, { search: searchKey });
      },
      getAppointmentDetails: (uid) => {
        const url = `patient/appointments/${uid}`;
        return client.get(url);
      },
      patchAppointment: (uid, payload) => {
        const url = `patient/appointments/${uid}`;
        return client.patch(url, payload);
      },
      getAppointmentSlots: (date) => {
        const url = `patient/appointments/time-slots?date=${date}`;
        return client.get(url);
      },
      uploadImage: (payload) => {
        const url = `images`;
        return client.post(url, payload, defaultFileUploadConfig);
      },
      feedback: {
        postFeedback: (uid, payload) => {
          const url = `patient/appointments/${uid}/feedback`;
          return client.post(url, payload);
        },
      },
    },
    prescription: {
      getPrescriptionsList: () => {
        const url = "patient/prescriptions";
        return client.get(url);
      },
      getPrescriptionDetails: (uid) => {
        const url = `patient/prescriptions/${uid}`;
        return client.get(url);
      },
    },
    getPatientMedicineList: () => {
      const url = "patient/medicines";
      return client.get(url);
    },
  },

  clinic: {
    getDashboardData: (params) => {
      const url = `we/organizations/dashboard`;
      return client.get(url, { params });
    },
    appointment: {
      getAppointmentSchedules: () => {
        const url = `we/appointments/schedules`;
        return client.get(url);
      },
      postAppointmentSchedules: (payload) => {
        const url = `we/appointments/schedules`;
        return client.post(url, payload);
      },
      putAppointmentSchedules: (payload) => {
        const url = `we/appointments/schedules`;
        return client.put(url, payload);
      },
      getClinicAppointments: (params) => {
        const url = `we/appointments`;
        return client.get(url, { params });
      },
      updateAppointmentStatus: (uid, payload) => {
        const url = `we/appointments/${uid}`;
        return client.patch(url, payload);
      },
      getDoctorAppointmentDetails: (uid) => {
        const url = `we/appointments/${uid}`;
        return client.get(url);
      },
      getAppointment: (uid) => {
        const url = `we/appointments/${uid}`;
        return client.get(url);
      },
      patchAppointment: (uid, payload) => {
        const url = `we/appointments/${uid}`;
        return client.patch(url, payload);
      },
      crateAppointment: (payload) => {
        const url = "we/appointments";
        return client.post(url, payload);
      },
      getAppointmentSlots: (date) => {
        const url = `we/appointments/time-slots?date=${date}`;
        return client.get(url);
      },
    },

    doctor: {
      getDoctorList: (params) => {
        const url = "we/doctors";
        return client.get(url, { params });
      },
      getDoctorDetails: (uid) => {
        const url = `we/doctors/${uid}`;
        return client.get(url);
      },
      addDoctor: (payload) => {
        const url = `we/doctors`;
        return client.post(url, payload);
      },

      patchDoctor: (uid, payload) => {
        const url = `we/doctors/${uid}`;
        return client.patch(url, payload);
      },

      getDoctorAppointments(doctorUid, params) {
        const url = `we/doctors/${doctorUid}/appointments`;
        return client.get(url, { params });
      },
    },

    patient: {
      getPatientList: () => {
        const url = "we/patients";
        return client.get(url);
      },
      postPatient: (payload) => {
        const url = "we/patients";
        return client.post(url, payload);
      },
      patchPatient: (uid, payload) => {
        const url = `we/patients/${uid}`;
        return client.patch(url, payload);
      },
      getPatients: (params) => {
        const url = `we/patients`;
        return client.get(url, { params });
      },
      getPatientByPhone: (phone) => {
        const url = `we/patients?search=${phone}`;
        return client.get(url);
      },
      getPatientDetails: (patientId) => {
        const url = `we/patients/${patientId}`;
        return client.get(url);
      },
      getUpcomingAppointmentList: (patientId) => {
        const url = `we/patients/${patientId}/appointments/upcoming`;
        return client.get(url);
      },
      getCompletedAppointmentList: (patientId) => {
        const url = `we/patients/${patientId}/appointments/completed`;
        return client.get(url);
      },
    },
    department: {
      getDepartments: () => {
        const url = "we/organizations/departments";
        return client.get(url);
      },
    },
  },

  doctor: {
    profile: {
      getDoctor: () => {
        const url = "doctors";
        return client.get(url);
      },
      patchDoctor: (payload) => {
        const url = "doctors";
        return client.patch(url, payload, defaultFileUploadConfig);
      },
    },

    appointment: {
      getAppointments: (params) => {
        const url = `doctors/appointments`;
        return client.get(url, { params });
      },
      getAppointmentDetails: (uid) => {
        const url = `doctors/appointments/${uid}`;
        return client.get(url);
      },
      patchAppointment: (uid, payload) => {
        const url = `doctors/appointments/${uid}`;
        return client.patch(url, payload);
      },
    },

    feedback: {
      postFeedback: (uid, payload) => {
        const url = `doctors/appointments/${uid}/feedback`;
        return client.post(url, payload);
      },
    },

    prescription: {
      createPrescription: (appointmentUid, payload) => {
        const url = `doctors/appointments/${appointmentUid}/prescriptions`;
        return client.post(url, payload);
      },
      getAppointmentPrescriptions: (appointmentUid) => {
        const url = `doctors/appointments/${appointmentUid}/prescriptions`;
        return client.get(url);
      },
    },

    medicine: {
      getMedicines: (searchKey) => {
        const url = `doctors/medicine?search=${searchKey}`;
        return client.get(url);
      },
    },

    medicalRecords: {
      getPrevMedicalRecords: (patient_uid) => {
        const url = `doctors/patients/${patient_uid}/medical/records`;
        return client.get(url);
      },
    },
  },
};

export default APIKit;

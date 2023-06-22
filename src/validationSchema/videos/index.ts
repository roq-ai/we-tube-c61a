import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  status: yup.string().required(),
  content_creator_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

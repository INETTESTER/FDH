import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';
const formData = new FormData();
formData.append('type', 'txt');

// แนบไฟล์ทั้งหมด (ชื่อ key = file ซ้ำได้หลายไฟล์)
const filenames = [
  'ADP.TXT', 'AER.TXT', 'CHA.TXT', 'CHT.TXT',
  'DRU.TXT', 'IDX.TXT', 'INS.TXT', 'IOP.TXT',
  'IPD.TXT', 'IRF.TXT', 'LABFU.TXT', 'ODX.TXT',
  'OOP.TXT', 'OPD.TXT', 'ORF.TXT', 'PAT.TXT',
];

for (const name of filenames) {
  const data = open(`../file/${name}`);
  formData.append('file', http.file(data, name, 'text/plain'));
}

export function portal_upload_16_files_v2() {
  const url = 'https://fdh.moph.go.th/api/v2/auth/portal/file?type=txt';
  const token = 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqaXJ1dDIuaW5ldEAwMDAwMCIsImlhdCI6MTc1MzI4MzQ3OCwiZXhwIjoxNzUzMjk0Mjc4LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NDY3NSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhCQ0VGMUE3IiwibG9naW4iOiJqaXJ1dDIuaW5ldCIsIm5hbWUiOiLguIjguLTguKPguLHguI_guJDguYwg4LmB4Liq4LiH4LiJ4Liy4LiiIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4l-C4lOC4quC4reC4muC4o-C4sOC4muC4miIsImhvc3BpdGFsX2NvZGUiOiIwMDAwMCIsImVtYWlsIjoiamlydXRzYW5nY2hheS5iYWxsQGdtYWlsLmNvbSIsImFjY291bnRfYWN0aXZhdGVkIjp0cnVlLCJhY2NvdW50X3N1c3BlbmRlZCI6ZmFsc2UsImxhc3RfY2hhbmdlX3Bhc3N3b3JkIjoxNzA3OTkwMTcxLCJsYXN0X2NvbmZpcm1fb3RwIjoxNzUzMTk0MTI1LCJjaWRfaGFzaCI6IjkzNTc0QkI0QkY2RjE0MzE5NERGNEJFREFGRjNFQTdCOjEwIiwiY2lkX2VuY3J5cHQiOiI0ODY0OEI1NjJENjU2NkFCRTlGQTUyMjlFRDY1MDRFMTI2NzQ5N0RBODlBNTdBQzYyRjg3RTM0MjNGMjU2REE1Qzg0MDcyMDQ5OTdGMDgzNUQyRUUyMTg4NkQiLCJjaWRfYWVzIjoicExXRCtDdThPeFQxQ215Qkp2cExkdz09IiwiY2xpZW50X2lwIjoiMjAzLjE1MS4zNS4xOTEiLCJzY29wZSI6W3siY29kZSI6Ik1PUEhfQ0xBSU06MSJ9LHsiY29kZSI6Ik1PUEhfQ0xBSU1fQVBJOjEifSx7ImNvZGUiOiJNT1BIX0NMQUlNX0FETUlOOjEifV0sInJvbGUiOlsibW9waC1hcGkiXSwic2NvcGVfbGlzdCI6IltNT1BIX0NMQUlNOjFdW01PUEhfQ0xBSU1fQVBJOjFdW01PUEhfQ0xBSU1fQURNSU46MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsMiI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWwzIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDQiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNSI6IicnIn19.R2nlxdoX9Of44zb8Hc7miivJ5sYvsWpywQiEPiLziXKRYFWUfh6H4SNL7iwVeuN0IaZI_KfIWVHQiSSSqzBPegI-GUFVnfFsQZJQaYTlkb-gNylzzMEB4LQUQ5yW99USr-8b_XLg9rkDDZdZIq0vxQFGXssEp0apcU0Hocnx8kdavCZ1XKK_Ukc2In5OYyl-BmdKJ7woset5_gR97DLHp29R2eCWd6VFMpRzEznsZ9go6tvoHEQPVtjnj_x31cMlsJNU-319nMoPSPzH8TmOtGKlVD2g2zLuIH6B8AMlvZELfeUuMDGwzNahAve2cuDjfpYlm0PcKufQs9CNWj3_haH6kzpDoBcZmz-STgV-IayrpR48Hgl6NIt0NPRbYOIgJtgolar5JCR_7ynwy0omyNFpxSixvJcVir-HxTtZoPJlOkjQ_qW5N1VhYDswKS-Ww6MJnRqDmeZoBlvB5LJy9s19R1GZt0_czw_frLX6I_M1tiOFOBEpHCDpJwlO-uh2St7hNAa8sAQxLgVdLwN9Yp6-HvBVFIEWUcpKJokVcm7obnhWQQvR8jwF0PH_0cgk-3NHSLN2tB8BhyhBKtA6KfhTBRTI5Xgdu1QAW-r-35YNOgjj2blIN9AwIyIPorQFekZDNR_jsutUaFLoEFIa-Ps9zEtj91jSSQUA3jgqCYI'; // แทนที่ด้วย token จริง


  const headers = {
    Authorization: token,
    'Content-Type': 'multipart/form-data; boundary=' + formData.boundary,
  };

  const res = http.post(url, formData.body(), { headers, timeout: '240s' });

  // console.log(`Status: ${res.status}`);
  // console.log(res.body);
  return res;
}

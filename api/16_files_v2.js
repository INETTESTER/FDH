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
  const token = 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqaXJ1dDIuaW5ldEAwMDAwMCIsImlhdCI6MTc1NDM4NzMxNSwiZXhwIjoxNzU0Mzk4MTE1LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NDY3NSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhCQ0VGMUE3IiwibG9naW4iOiJqaXJ1dDIuaW5ldCIsIm5hbWUiOiLguIjguLTguKPguLHguI_guJDguYwg4LmB4Liq4LiH4LiJ4Liy4LiiIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4l-C4lOC4quC4reC4muC4o-C4sOC4muC4miIsImhvc3BpdGFsX2NvZGUiOiIwMDAwMCIsImVtYWlsIjoiamlydXRzYW5nY2hheS5iYWxsQGdtYWlsLmNvbSIsImFjY291bnRfYWN0aXZhdGVkIjp0cnVlLCJhY2NvdW50X3N1c3BlbmRlZCI6ZmFsc2UsImxhc3RfY2hhbmdlX3Bhc3N3b3JkIjoxNzA3OTkwMTcxLCJsYXN0X2NvbmZpcm1fb3RwIjoxNzU0MzI5NTU3LCJjaWRfaGFzaCI6IjkzNTc0QkI0QkY2RjE0MzE5NERGNEJFREFGRjNFQTdCOjEwIiwiY2lkX2VuY3J5cHQiOiI0ODY0OEI1NjJENjU2NkFCRTlGQTUyMjlFRDY1MDRFMTI2NzQ5N0RBODlBNTdBQzYyRjg3RTM0MjNGMjU2REE1Qzg0MDcyMDQ5OTdGMDgzNUQyRUUyMTg4NkQiLCJjaWRfYWVzIjoicExXRCtDdThPeFQxQ215Qkp2cExkdz09IiwiY2xpZW50X2lwIjoiMTcxLjYuMjcuOTciLCJzY29wZSI6W3siY29kZSI6Ik1PUEhfQ0xBSU06MSJ9LHsiY29kZSI6Ik1PUEhfQ0xBSU1fQVBJOjEifSx7ImNvZGUiOiJNT1BIX0NMQUlNX0FETUlOOjEifV0sInJvbGUiOlsibW9waC1hcGkiXSwic2NvcGVfbGlzdCI6IltNT1BIX0NMQUlNOjFdW01PUEhfQ0xBSU1fQVBJOjFdW01PUEhfQ0xBSU1fQURNSU46MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsMiI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWwzIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDQiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNSI6IicnIn19.Zma9lrcWy5-p963y4loPTrK3mkAj_WdpwA_9HE3zEeIAsrsTj-bkks9xp7x2dHchw73Kqqfj2vC5cHHVuPtI3tzz5tbV7GPPBNTvM1RVtWiku5pkAtAF1y5SsIsvc6UW8NGTj3ez-6npF1iQBWf6luVBcEYWF6z-CoColWtqZWLRTf_4D71ovsN4h_oXfM8fOemRSWttWOqtR2v-PQ4oOsewsEw54F3S8txn7dqMiARCleNIi9Ty9GtN4Ql8-HUMBsLwEgE51LCwdbfMM-dKTgN3COpzdIPrOf2q48FMtcj1_eovryORaREgI1Zig_xrcNicEfjSLzIo_BO3PzxCugbX6CMx8qLwwIdOpts_dkZ9Zr-LjO1Rt1CCm6rCg8EqBY7sicQuceRRmsjl0FtxLVysfGKvH7DGIaadMn_Pvk-J8gdRkkKPN0nWf7cC-CGfmQZOTigcMZnHllfHFNp4o_NooSAK57jNnNXiUHF9E7DpQ1VI7dOk8U-_IWFfAhvKSBr4lZMSIgZn2Xnr3VglhlvHi7ADYR1lky5sH3VdXAvXkFqIiAwap2WAO55kDRz5pmMIavamT2BmnyLbjCaLM0FsgoFvDeHlPFvkFS8lIe7lGMXrLmHjGNiR7HU5gkF8wpL2oyL3x9-GJ4ShJgooJoz94J2nLEvryH7ZDlBnY9w'; // แทนที่ด้วย token จริง


  const headers = {
    Authorization: token,
    'Content-Type': 'multipart/form-data; boundary=' + formData.boundary,
  };

  const res = http.post(url, formData.body(), { headers, timeout: '240s' });

  // console.log(`Status: ${res.status}`);
   //console.log(res.body);
  return res;
}

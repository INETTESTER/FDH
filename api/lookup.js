import http from 'k6/http';

export function lookup() {
  const url = 'https://fdh.moph.go.th/api/v1/auth/portal/export/ucs/lookup' +
              '?fund=ucs&page=1&size=10&start_date=&end_date=&send_date=' +
              '&cid=&hn=&an=&seq=&inscl=&patient=&uid=&status=&hcode=00000' +
              '&id_active=true&is_claimable_item=false&project_code=&fiscal_year=2568';

  const headers = {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_TOKEN', // ถ้าจำเป็นต้องใส่ Token
  };

  const res = http.get(url, { headers, timeout:'240s' });

  //console.log(res.body); // log response body

  return res;
}

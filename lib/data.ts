export const cspmData = {
    "categories": [
      {
        "id": "cspm-executive",
        "name": "CSPM Executive Dashboard :",
        "widgets": [
          {
            "id": "widget1",
            "name": "Cloud Accounts",
            "bgColor":['#5578FF','#E1EBFF'],
            "data":['Connected','Not Connected'],
            "count":['2','2'],
            "totalCount":"2",
          },
          {
            "id": "widget2",
            "name": "Cloud Account Risk Assesment",
            "bgColor":['#B9140F','#FAD732','#C8CDDC','#19A55A'],
            "data":['Failed','Warning','Not available','Passed'],
            "count":['1689','681','36','7253'],
            "totalCount":"9659",
          },
          
        ]
      },
    ]
  };
  
export const cwppData = {
    "categories": [
      {
        "id": "CWPPDashboard",
        "name": "CWPP Dashboard :",
        "widgets": [
          {
            "id": "widget1",
            "name": "Top 5 Namespace Specific Alerts",
            
          },
          {
            "id": "widget2",
            "name": "Worklod Alerts",
            
          },
          
        ]
      },
    ]
  };
  
  export const registryscanData = {
    "categories": [
      {
        "id": "registry",
        "name": "Registry Scan",
        "widgets": [
          {
            "id": "widget1",
            "name": "Image Risk Assesment",
            "bgColor":['#6E0F0A','#C82819','#EB9132','#F0C341','#AAAAAA'],
            "data":['Critical','High','Moderate','Low','Others'],
            "count":['9','150','800','451','60'],
            "subtitle":"Total Vulnerabilities",
            "totalCount":"1470",
          },
          {
            "id": "widget2",
            "name": "Image Security Issues",
            "bgColor":['#6E0F0A','#C82819','#EB9132','#F0C341','#AAAAAA'],
            "data":['Critical','High','Moderate','Low','Others'],
            "count":['2','2','2','1','1'],
            "subtitle":"Total Images",
            "totalCount":"2",
          },
          
        ]
      },
    ]
  };
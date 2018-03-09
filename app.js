
var app = new Vue({
  el: '#app',
  data: {
    baseUrl: 'https://y6igzza3w5.execute-api.us-east-1.amazonaws.com/dev',
    endpoint: '',
    request: '',
    status: '',
    error: '',
    response: '',
    title: 'Bankbot',
    version: 1.2,
    options: [
      {
        'name': '000 Administration > Register',
        'value': '/access/register'
      },
      {
        'name': '000 Administration > Destroy (format DB)',
        'value': '/administration/destroy'
      },
      {
        'name': '001 Access > Validate',
        'value': '/access/validate'
      },
      {
        'name': '001 Access > Delete',
        'value': '/access/delete'
      },
      {
        'name': '001 Access > Block',
        'value': '/access/block'
      },
      {
        'name': '001 Access > Unblock',
        'value': '/access/unblock'
      },
      {
        'name': '002 Accounts > Summary',
        'value': '/accounts/summary'
      },
      {
        'name': '002 Accounts > Details',
        'value': '/accounts/details'
      },
      {
        'name': '002 Accounts > Activity',
        'value': '/accounts/activity'
      },
      {
        'name': '002 Accounts > Open',
        'value': '/accounts/open'
      },
      {
        'name': '002 Accounts > Close',
        'value': '/accounts/close'
      },
      {
        'name': '002 Accounts > Update',
        'value': '/accounts/update'
      },

      {
        'name': '003 Personal Info > Get',
        'value': '/personal-information/get'
      },

      {
        'name': '003 Personal Info > Update',
        'value': '/personal-information/update'
      },
      {
        'name': '003 Personal Info > Add',
        'value': '/personal-information/add'
      },
      {
        'name': '003 Personal Info > Delete',
        'value': '/personal-information/delete'
      },
      {
        'name': '004 Token > Generate',
        'value': '/token/generate'
      },
      {
        'name': '004 Token > Validate',
        'value': '/token/validate'
      },

      {
        'name': '005 Products > Block',
        'value': '/products/block'
      },
      {
        'name': '005 Products > Unblock',
        'value': '/products/unblock'
      },

      {
        'name': '006 Transfers > Make',
        'value': '/transfers/make'
      },

      {
        'name': '006 Transfers > Cancel',
        'value': '/transfers/cancel'
      },

      {
        'name': '007 PIN > Validate',
        'value': '/pin/validate'
      },
      {
        'name': '007 PIN > Change',
        'value': '/pin/change'
      },
    ]
  },
  methods: {
    change (e) {
      var value = e.target.value;
      if (this.endpoint in SAMPLE_REQUESTS) {

        this.request = JSON.stringify(SAMPLE_REQUESTS[this.endpoint], null, 2);
      }
      else {
        console.log(`${this.endpoint} request not found`)
      }
    },
    post (e) {
      e.preventDefault();
      this.error = false;

      if (!this.endpoint) {
        $('#endpoint').animation('shake');
        return this.displayError('Select an endpoint');
      }

      try {
        var json = JSON.parse(this.request);
      } catch (err) {
        $('#request').animation('shake');
        return this.displayError('Invalid json')
      }

      var url = `${this.baseUrl}${this.endpoint}`;
      postJson(url, JSON.parse(this.request), (status, responseText) => {
        this.status = status;
        if (status == 0) {
          $('#request').animation('shake');
          this.displayError(`Make sure bankbot server is running at ${this.baseUrl}`);
        } else {
          if (status != 200) $('#response').animation('shake');

          try {
            this.response = JSON.stringify(JSON.parse(responseText), null, 2);
          } catch (err) {
            this.response = responseText;
          }
        }
      })
    },
    clear (e) {
      if (e) e.preventDefault();
      this.endpoint = '';
      this.request = '';
      this.response = '';
      this.status = '';
      this.error = '';
    },
    displayError (message) {
      this.error = message;
    },
    getParameterByName (name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  },
  beforeMount () {
    var url = this.getParameterByName('url');
    if (url) this.baseUrl = url;
    console.log(`base URL set to ${this.baseUrl}`);
  }
})

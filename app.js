
var app = new Vue({
  el: '#app',
  data: {
    baseUrl: 'http://localhost:8888',
    endpoint: '',
    request: '',
    status: '',
    error: '',
    response: '',
    title: 'Bankbot',
    options: [
      {
        'name': '001 Manage User Access > Validate',
        'value': '/manage-user-access/validate'
      },
      {
        'name': '002 Relationship Summary > Get',
        'value': '/relationship-summary/get'
      },
      {
        'name': '003 Manage Account > Details',
        'value': '/manage-account/details'
      },
      {
        'name': '003 Manage Account > Open',
        'value': '/manage-account/open'
      },
      {
        'name': '003 Manage Account > Close',
        'value': '/manage-account/close'
      },
      {
        'name': '004 Get Transaction Activity > Account Activity',
        'value': '/get-transaction-activity/account-activity'
      },
      {
        'name': '005 Manage Personal Info > Get',
        'value': '/manage-personal-info/get'
      },
      {
        'name': '006 Manage Authentication Token > Generate',
        'value': '/manage-authentication-token/generate'
      },
      {
        'name': '006 Manage Authentication Token > Validate',
        'value': '/manage-authentication-token/validate'
      },
      {
        'name': '007 Manage Product Access > Block',
        'value': '/manage-product-access/block'
      },
      {
        'name': '007 Manage Product Access > Unblock',
        'value': '/manage-product-access/unblock'
      },
      {
        'name': '008 Manage Transfers > Make',
        'value': '/manage-transfers/make-transfer'
      },
      {
        'name': '009 Manage PIN > Validate',
        'value': '/manage-pin/validate'
      },
      {
        'name': '009 Manage PIN > Change',
        'value': '/manage-pin/change'
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

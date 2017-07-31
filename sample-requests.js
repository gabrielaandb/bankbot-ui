

var getRelationshipSummary = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john"
      }
    }
  }
}

var validateUserAccess = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "userId":   "john",
        "password": "john"
      }
    }
  }
}

var accountDetails = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john",
        "productDetails": {
          "productType":    "checking",
          "productCode":    "checking",
          "subProductType": "checking",
          "productCurrencyCode": "usd",
          "accountDetails": {
            "accountNumber": "accountNumber"
          }
        }
      }
    }
  }
}

var getTransactionActivity = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john",
        "productDetails": {
          "productType": "checking",
          "productCode": "checking",
          "subProductType": "checking",
          "productCurrencyCode": "usd",
          "productTransactionRole": "undefined",
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var getPersonalInfo = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john"
      }
    }
  }
}

var generateAuthenticationToken = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john",
      }
    }
  }
}

var validateAuthenticationToken = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "entityUserIdType": "customer",
        "entityUserId":     "john",
        "userAccessToken":  "<authToken>"
      }
    }
  }
}

var blockProductAccess = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "productDetails": {
          "productCode": "checking",
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var unblockProductAccess = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "productDetails": {
          "productCode": "checking",
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var makeTransfer = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "productDetails": [
          {
            "productType": "checking",
            "productCode": "checking",
            "productCurrencyCode": "usd",
            "productTransactionRole": "001",
            "accountNumber": "<sourceAccountNumber>",
            "amountDetails": {
              "amountType": "debit",
              "amountValue": "10.00"
            }
          },
          {
            "productType": "checking",
            "productCode": "checking",
            "productCurrencyCode": "usd",
            "productTransactionRole": "002",
            "accountNumber": "<destinationAccountNumber>",
            "amountDetails": {
              "amountType": "debit",
              "amountValue": "10.00"
            }
          }
        ]
      }
    }
  }
}

var validatePin = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "productDetails": {
          "productCode": "credit card",
          "accountNumber": "<accountNumber>",
          "physicalArtifactPin": "<pin>"
        }
      }
    }
  }
}

var changePin = {
  "message": {
    "header": {
      "fintechId":   "undefined",
      "userAgent":   "undefined",
      "sessionDate": "undefined",
      "sessionTime": "undefined",
      "sessionId":   "undefined",
      "retryFlag":   "0",
      "locale":      "us",
      "language":    "en",
      "entityCode":  "bankbot",
      "userId":      "john",
      "password":    "john",
      "userIpAddress":            "undefined",
      "transactionNumber":        "1",
      "transactionApprovalLevel": "undefined",
      "transactionFee":           "0",
      "transactionFeeFlag":       "0",
      "transactionLegend":        "undefined"
    },
    "body": {
      "customerDetails": {
        "productDetails": {
          "productCode": "credit card",
          "accountNumber": "<accountNumber>",
          "oldPhysicalArtifactPin": "<pin>",
          "newPhysicalArtifactPin": "<pin>"
        }
      }
    }
  }
}

var SAMPLE_REQUESTS = {
  '/relationship-summary/get': getRelationshipSummary,
  '/manage-user-access/validate': validateUserAccess,
  '/manage-account/details': accountDetails,
  '/get-transaction-activity/account-activity': getTransactionActivity,
  '/manage-personal-info/get': getPersonalInfo,
  '/manage-authentication-token/generate': generateAuthenticationToken,
  '/manage-authentication-token/validate': validateAuthenticationToken,
  '/manage-product-access/block': blockProductAccess,
  '/manage-product-access/unblock': unblockProductAccess,
  '/manage-transfers/make-transfer': makeTransfer,
  '/manage-pin/validate': validatePin,
  '/manage-pin/change': changePin
}

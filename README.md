# Checkly CLI feature branch tests example.

This project was created to show how to integrate [Checkly CLI](https://github.com/checkly/checkly-cli) with [ngrok](https://ngrok.com/) tunnels to test feature branches source code before merging them into staging or production stages, using Github Actions CI/CD workflows.

## Steps

You can sign up for a free `Checkly` account [here](https://app.checklyhq.com/signup) and `ngrok` account [here](https://dashboard.ngrok.com/get-started/setup).

After you get your [Checkly API Key](https://app.checklyhq.com/settings/user/api-keys) and [ngrok authtoken](https://dashboard.ngrok.com/get-started/your-authtoken), you must configure the following secrets within your project settings:

```
CHECKLY_ACCOUNT_ID
CHECKLY_API_KEY
NGROK_AUTHTOKEN
```

This example uses a Vue 3 boilerplate project and has two open pull-request:
1. [PR #10](https://github.com/nahuelon/checkly-cli-sandbox/pull/10) with all tests passing, executing the checks running the branch source-code.
1. [PR #9](https://github.com/nahuelon/checkly-cli-sandbox/pull/9) with tests failing, restricting the pull request to be merged.

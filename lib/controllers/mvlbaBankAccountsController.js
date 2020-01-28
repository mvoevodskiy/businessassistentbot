const Keyboard = require('botcms/lib/keyboard');
const BotController = require('mvl-db-bot-controller');
/**
 * @class mvlbaBankAccountsController
 *
 * @property {MVLoader}
 * @property {MVTools}
 * @property {BotCMS} Bot
 * @property {Sequelize} DB
 * @property {Model} Contractors
 * @property
 */
class mvlbaBankAccountsController extends BotController {

    caption = 'mvlbaBankAccounts';
    modelName = 'mvlbaBankAccount';

    fields = {
        equals: [],
        list: ['id', 'name', 'bankName', 'bik', 'active'],
    };

    constructor (App, config) {
        super(App, config);
        this.loadConfig({
            lexicons: {
                // choose_from_list: 'common.msg.choose_from_list',
                details: this.caption + '.msg.details',
                export_finished: this.caption + '.msg.export_finished',
                import_finished: this.caption + '.msg.import_finished',
                field_caption: field => this.caption + '.fieldNames.' + field,
            },
            path: {
                answers_single_query: 'answers.manage_bank_accounts.query.answer',
                answers_add: 'answers.manage_bank_accounts_add',
                answers_selected: 'answers.manage_bank_accounts.selected.answer',
            },
            exportFilename: 'bankaccounts',
        })
    }

}

module.exports = mvlbaBankAccountsController;
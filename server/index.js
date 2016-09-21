import configs from 'lib/configs/wechat'
import publications from './publications';
import privateConfigs from 'server/configs/wechat';
import methods from './methods';

// Uncomment middleware if you need to process messages and events
// import middleware from './middleware';

export default {
  configs,
  publications,
  privateConfigs,
  // middleware,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'wechat' })) {
      Collections.Packages.insert({
        name: 'wechat',
        configs: context.configs.wechat || {},
        privateConfigs: context.privateConfigs.wechat || {}
      });
    }
  }
};

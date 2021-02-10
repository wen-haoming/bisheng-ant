import collect from 'bisheng/collect';
import MainContent from './MainContent';
import * as utils from '../utils';

function isChangelog(pathname) {
  return pathname.indexOf('changelog') >= 0;
}

function getData(dataObj,pageDataPath){
  pageDataPath = pageDataPath.filter(item=>item)
  let tarObj = dataObj;
    let len = pageDataPath.length;

    function get(obj,tarKey){
        for(let key in obj){
            if(key.toLowerCase() === tarKey.toLowerCase()){
                return obj[key]
            }
        }
    }

    for(let i = 0; i < len ; i++){
      tarObj = get(tarObj,pageDataPath[i])
    }
    return tarObj
}


export default collect(async nextProps => {
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.replace('-cn', '').split('/');
 let pageData = getData(nextProps.data, pageDataPath)

  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }
  const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';

  const pageDataPromise =
    typeof pageData === 'function'
      ? pageData()
      : (pageData[locale] || pageData.index[locale] || pageData.index)();

  const demosFetcher = getData(nextProps.data, [...pageDataPath, 'demo']);
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { localizedPageData, demos };
  }
  return { localizedPageData: await pageDataPromise };

})(MainContent);

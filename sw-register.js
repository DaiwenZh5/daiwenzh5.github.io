navigator.serviceWorker&&navigator.serviceWorker.register('/sw.js?v=20210325023713').then(function(){navigator.serviceWorker.addEventListener('message',function(a){'sw.update'===a.data&&$.message({title:'更新成功',message:'',type:'success'});})});
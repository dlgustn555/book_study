const LIST = `
<div class="bg-gray-600 min-h-screen">
    <div class="bg-white text-xl">
    <div class="mx-auto px-4">
        <div class="flex justify-between items-center py-6">
        <div class="flex justify-start">
            <h1 class="font-extrabold">Hacker News</h1>
        </div>
        <div class="items-center justify-end">
            <a href="#/page/{{__prev_page__}}" class="text-gray-500">
            Previous
            </a>
            <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
            Next
            </a>
        </div>
        </div> 
    </div>
    </div>
    <div class="p-4 text-2xl text-gray-700">
    {{__news_feed__}}        
    </div>
</div>
`

const LI = `
<div class="p-6 {{__read__}} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
<div class="flex">
  <div class="flex-auto">
    <a href="#/show/{{__id__}}">{{__title__}}</a>  
  </div>
  <div class="text-center text-sm">
    <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">{{__comments_count__}}</div>
  </div>
</div>
<div class="flex mt-3">
  <div class="grid grid-cols-3 text-sm text-gray-500">
    <div><i class="fas fa-user mr-1"></i>{{__user__}}</div>
    <div><i class="fas fa-heart mr-1"></i>{{__points__}}</div>
    <div><i class="far fa-clock mr-1"></i>{{__time_ago__}}</div>
  </div>  
</div>
</div>    
`

export {LIST, LI}

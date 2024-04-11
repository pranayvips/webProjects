from youtubesearchpython import Comments
from youtubesearchpython import Playlist, playlist_from_channel_id, Search
from pytube import YouTube

# {
#     thumbnail: "https://i.ytimg.com/vi/kKvK2foOTJM/hq720.jpg",
#     title:
#       "Brain Hack: 6 secrets to learning faster, backed by neuroscience | Lila Landowski | TEDxHobart",
#     channel_name: "TEDx Talks",
#     channel_icon: "TEDx Talks",
#     channel_url: "https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q",
#     views: "1M",
#     upload_date: "3 months ago",
#     video: "https://www.youtube.com/embed/kKvK2foOTJM",
#     length: "18 : 18",
#   }
# channel_id = "UC_aEa8K-EOJ3D6gOs7HcyNg"
# playlist = Playlist(playlist_from_channel_id(channel_id))
# for i in playlist.videos:
#     video_main=Youtube(i["link"])
#     thumbnail_ =i['thumbnails'][-1]['url']
#     title_=i['Title']
#     channel_name_=i["channel"]['name']
#     # channel_icon_=tomake
#     channel_url_=f"https://www.youtube.com/channel/{i['channel']['id']}"
#     views_=video_main.views
#     upload_date="tomake"
#     video_=video_main.embed_url
#     length_=i["duration"]

# while playlist.hasMoreVideos:
#     video = playlist.getNextVideos()
#     print(playlist.videos[0])
#     break
# print('Found all the videos.')


# from youtubesearchpython import Hashtag
# hashtag = Hashtag('ncs', limit=1)
# print(hashtag.result())


# from youtubesearchpython import Suggestions, ResultMode
# suggestions = Suggestions(language='en', region='US')
# print(suggestions.get('NoCopyrightSounds', mode=ResultMode.json))


# {'id': 'UgxenmlpJqmMCP5NchN4AaABAg',
#  'author': {'id': 'UCpLm6awoi0gKuaSR3vhBWCg', 'name': '@bv6287',
#             'thumbnails': [{'url': 'https://yt3.ggpht.com/LlZiK4oah5a9KMhMnDt9KT_2gSDMHLGAxLiVmPl-7vkOBrCaPCi-B-XuQ3LYwBDCv9v2DF8l=s48-c-k-c0x00ffffff-no-rj', 'width': 48, 'height': 48}, {'url': 'https://yt3.ggpht.com/LlZiK4oah5a9KMhMnDt9KT_2gSDMHLGAxLiVmPl-7vkOBrCaPCi-B-XuQ3LYwBDCv9v2DF8l=s88-c-k-c0x00ffffff-no-rj', 'width': 88, 'height': 88}, {'url': 'https://yt3.ggpht.com/LlZiK4oah5a9KMhMnDt9KT_2gSDMHLGAxLiVmPl-7vkOBrCaPCi-B-XuQ3LYwBDCv9v2DF8l=s176-c-k-c0x00ffffff-no-rj', 'width': 176, 'height': 176}]},
#  'content': 'El silencio invadió todas las casas de Italia. Sobre el campo, Roberto Baggio miraba al suelo con los brazos en jarra. No era una simple imagen de derrota, era como si aquel prodigio hubiera perdido su alma. Nunca antes se había visto una imagen tan desoladora sobre un campo de fútbol.',
#  'published': '3 weeks ago', 'isLiked': False, 'authorIsChannelOwner': False, 'voteStatus': 'INDIFFERENT',
#  'votes': {'simpleText': '71', 'label': '71 likes'}, 'replyCount': 1}
# comments = Comments("https://www.youtube.com/watch?v=5MgBikgcWnY")
# print(comments.comments['result'][0])  # get top 20 comments
# while comments.hasMoreComments:
#     comments.getNextComments()


# from youtubesearchpython import Channel
# channel = Channel.get("UC_aEa8K-EOJ3D6gOs7HcyNg")
# banner = channel["banners"][-1]['url']
# title = channel["title"]
# description = channel["description"]
# subscribers = channel["subscribers"]["simpleText"]  # 33.5M subscribers
# subscribers1 = channel["subscribers"]["label"]  # 33.5 million subscribers
# thumbnails = channel["thumbnails"][-1]['url']
# views = channel["views"]
# joined_date = channel["joinedDate"]
# country = channel["country"]
# print(banner, title, description, subscribers, thumbnails, views, sep="\n")
# print(channel)


# from youtubesearchpython import Channel
# channel = Channel("UC_aEa8K-EOJ3D6gOs7HcyNg")
# print((channel.result["playlists"][0:6]))
# her-----------
# while channel.has_more_playlists():
#     channel.next()
#     print(len(channel.result["playlists"]))

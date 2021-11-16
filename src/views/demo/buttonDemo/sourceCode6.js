export default`
<MyBadge :value="12" class="item">
  <MyButton size="small">评论</MyButton>
</MyBadge>
<MyBadge :value="3" class="item">
  <MyButton size="small">回复</MyButton>
</MyBadge>
<MyBadge :value="1" class="item" type="primary">
  <MyButton size="small">评论</MyButton>
</MyBadge>
<MyBadge :value="2" class="item" type="warning">
  <MyButton size="small">回复</MyButton>
</MyBadge>
<MyBadge value="new" class="item">
  <MyButton size="small">评论</MyButton>
</MyBadge>
<MyBadge value="hot" class="item">
  <MyButton size="small">回复</MyButton>
</MyBadge>
<MyBadge is-dot class="item">数据查询</MyBadge>
<MyBadge is-dot class="item">
  <MyButton class="share-button" icon="el-icon-share" type="primary"></MyButton>
</MyBadge>
`;
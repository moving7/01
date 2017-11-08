<p><a href="/demo/manage">新建</a></p>

<table>
    <tr>
        <th>ID</th>
        <th>内容</th>
        <th>操作</th>
    </tr>
    <?php foreach ($data as $k=>$v): ?>
        <tr>
            <td><?php echo $v['id'] ?></td>
            <td><?php echo $v['item_name'] ?></td>
            <td>
                <a href="/Demo/manage/<?php echo $v['id'] ?>">编辑</a>
                <a href="/Demo/delete/<?php echo $v['id'] ?>">删除</a>
            </td>
        </tr>
    <?php endforeach ?>
</table>
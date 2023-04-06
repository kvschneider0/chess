"""create games table

Revision ID: a77f31de3d97
Revises: f0e36f54527a
Create Date: 2023-04-06 08:45:55.379490

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a77f31de3d97'
down_revision = 'f0e36f54527a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('games',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('white_user_id', sa.Integer(), nullable=True),
    sa.Column('black_user_id', sa.Integer(), nullable=True),
    sa.Column('pgn', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['black_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['white_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('games')
    # ### end Alembic commands ###
